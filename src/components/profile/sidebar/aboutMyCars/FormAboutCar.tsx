/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import Field from '../../../../ui/fields/Field'
import Switch from '../../../../ui/switch/Switch'
import { Typography } from '../../../../ui/Typography'
import { MdNavigateNext } from 'react-icons/md'

export interface IFormAboutCar {
  model: string
  carName: string
  brand: string
  generation: string
  oldCar: boolean
  nickName: string
  release: string
  purchaseTime: string
  color: string
}

const FormAboutCar = ({
  defaultValue,
  setFields,
  increment,
  decrement,
}: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormAboutCar>({ mode: 'onChange', defaultValues: defaultValue })

  const onSubmit: SubmitHandler<IFormAboutCar> = async data => {
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
        My car
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-6'
      >
        <div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Nickname
            </h3>

            <Field
              type='text'
              placeholder='Nickname'
              error={errors.nickName}
              {...register('nickName', {
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
              Brand
            </h3>

            <Field
              type='text'
              placeholder='Brand'
              error={errors.brand}
              {...register('brand', {
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
              Model
            </h3>

            <Field
              type='text'
              placeholder='Model'
              error={errors.model}
              {...register('model', {
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
              Generation
            </h3>

            <Field
              type='text'
              placeholder='Generation'
              error={errors.generation}
              {...register('generation', {
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
              Release
            </h3>

            <Field
              type='text'
              placeholder='Release'
              error={errors.release}
              {...register('release', {
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
              Purchase time
            </h3>

            <Field
              type='text'
              placeholder='Purchase time'
              error={errors.purchaseTime}
              {...register('purchaseTime', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
          <div className='mb-12'>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Color
            </h3>

            <Field
              type='text'
              placeholder='color'
              error={errors.color}
              {...register('color', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            ></Field>
          </div>
          <Switch
            defaultChecked={false}
            {...register('oldCar', {
              required: false,
            })}
          />
          {errors.oldCar && <p> error</p>}
          <Typography type={'Ag-14-regular'} className={'text-slate-400	'}>
            Turn it on if you are adding a car that you have driven before
          </Typography>
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

export default FormAboutCar
