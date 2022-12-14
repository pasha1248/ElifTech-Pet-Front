/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdNavigateNext } from 'react-icons/md'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import Field from '../../../../ui/fields/Field'
import Switch from '../../../../ui/switch/Switch'
import { Typography } from '../../../../ui/Typography'
import { IFormAboutCar } from './FormAboutCar'

type IFormAboutCarCharacteristics = {
  motor: string
  engineCapacityLiters: string
  transmission: string
  driveUnit: string
  purchaseTime: string
  mileage: string
}

const FormAboutСharacteristicsCar = ({
  defaultValue,
  setFields,
  increment,
}: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormAboutCarCharacteristics>({
    mode: 'onChange',
    defaultValues: defaultValue,
  })

  const onSubmit: SubmitHandler<IFormAboutCarCharacteristics> = async data => {
    setFields(data)
    increment()
    console.log(defaultValue)
    try {
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Typography type={'h1'} style={{ fontSize: '25px' }}>
        Characteristics
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-6 '
      >
        <div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Engine
            </h3>

            <Field
              type='text'
              placeholder='Engine'
              error={errors.motor}
              {...register('motor', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Capacity liters
            </h3>

            <Field
              type='text'
              placeholder='Capacity liters'
              error={errors.engineCapacityLiters}
              {...register('engineCapacityLiters', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Transmission
            </h3>

            <Field
              type='text'
              placeholder='Transmission'
              error={errors.transmission}
              {...register('transmission', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Drive unit
            </h3>

            <Field
              type='text'
              placeholder='Drive unit '
              error={errors.driveUnit}
              {...register('driveUnit', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
        </div>
        <div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Mileage
            </h3>

            <Field
              type='text'
              placeholder='Mileage'
              error={errors.mileage}
              {...register('mileage', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
          {/* 
          <Switch
            defaultChecked={false}
            {...register('oldCar', {
              required: false,
            })}
          />
          {errors.oldCar && <p> error</p>}
          <Typography type={'Ag-14-regular'} className={'text-slate-400	'}>
            Turn it on if you are adding a car that you have driven before
          </Typography> */}
        </div>
        <div></div>
        <ButtonAuth type='submit' className='w-full mt-6'>
          Next step
          <MdNavigateNext
            color='blue'
            size={32}
            className='ml-2'
            style={{ color: 'white' }}
          />
        </ButtonAuth>
      </form>
    </div>
  )
}

export default FormAboutСharacteristicsCar
