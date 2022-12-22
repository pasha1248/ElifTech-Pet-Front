/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdNavigateNext } from 'react-icons/md'
import { CarCharacter } from '../../../../common/const/carsData'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import Field from '../../../../ui/fields/Field'
import { Listbox } from '../../../../ui/select/SelectHeadles'
import Switch from '../../../../ui/switch/Switch'
import { Typography } from '../../../../ui/Typography'
import { IFormAboutCar } from './FormAboutCar'
import { MdArrowBackIosNew } from 'react-icons/md'

export interface IFormAboutCarCharacteristics extends IFormAboutCar {
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
  decrement,
}: any) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm<IFormAboutCarCharacteristics | any>({
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

            <Listbox
              name='motor'
              control={control}
              rules={{
                validate: value => {
                  return getValues('motor') !== 'Select your'
                },
              }}
              people={CarCharacter.EngiteType}
              error={errors.motor}
            />
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Capacity liters
            </h3>

            <Listbox
              name='engineCapacityLiters'
              control={control}
              rules={{
                validate: value => {
                  return getValues('engineCapacityLiters') !== 'Select your'
                },
              }}
              people={CarCharacter.EngineCapacity}
              error={errors.engineCapacityLiters}
              liters
            />
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Transmission
            </h3>

            <Listbox
              name='transmission'
              control={control}
              rules={{
                validate: value => {
                  return getValues('transmission') !== 'Select your'
                },
              }}
              people={CarCharacter.TypeTransmission}
              error={errors.transmission}
            />
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Drive unit
            </h3>

            <Listbox
              name='driveUnit'
              control={control}
              rules={{
                validate: value => {
                  return getValues('driveUnit') !== 'Select your'
                },
              }}
              people={CarCharacter.TypDrive}
              error={errors.driveUnit}
            />
          </div>
        </div>
        <div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Mileage
            </h3>

            <Field
              type='text'
              placeholder='km'
              error={errors.mileage}
              {...register('mileage', {
                required: true,
              })}
            ></Field>
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Power
            </h3>
            <div className='relative'>
              <Field
                type='text'
                placeholder='power'
                error={errors.power}
                {...register('power', {
                  required: true,
                })}
              ></Field>
              <Typography type={'Ag-14-regular'} className={'absolute top-14'}>
                in horsepower
              </Typography>
            </div>
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
        <div>
          {' '}
          <ButtonAuth className='w-full mt-6' onClick={decrement}>
            <MdArrowBackIosNew
              color='blue'
              size={32}
              className='ml-2'
              style={{ color: 'white' }}
            />
            decrement
          </ButtonAuth>
        </div>
        <div>
          <ButtonAuth type='submit' className='w-full mt-6'>
            Next step
            <MdNavigateNext
              color='blue'
              size={32}
              className='ml-2'
              style={{ color: 'white' }}
            />
          </ButtonAuth>
        </div>
      </form>
    </div>
  )
}

export default FormAboutСharacteristicsCar
