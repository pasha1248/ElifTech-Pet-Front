/** @format */
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import Field from '../../../../ui/fields/Field'
import Switch from '../../../../ui/switch/Switch'
import { Typography } from '../../../../ui/Typography'
import { MdNavigateNext } from 'react-icons/md'
import { FieldAutoComplate } from '../../../../ui/select/FieldAutoComplate'
import { Listbox } from '../../../../ui/select/SelectHeadles'
import { useActions } from '../../../../hooks/useActions'
import { useAppSelector } from '../../../../hooks/useReduxHooks'

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
  people: any
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
    control,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: 'onChange',
    defaultValues: defaultValue,
  })

  const { allCarTypes, allBrand, allYers, isLoading } = useAppSelector(
    state => state.carSelectSlice
  )

  const { getAllBrand, getTypesCar, getYears } = useActions()

  React.useEffect(() => {
    getTypesCar()
    setTimeout(() => {
      getAllBrand()
      setTimeout(() => {
        getYears()
      }, 2000)
    }, 2000)
    // getAllBrand()
  }, [])

  const onSubmit: SubmitHandler<IFormAboutCar> = async data => {
    setFields(data)
    increment()
    console.log(defaultValue)
    try {
    } catch (e) {
      console.log(e)
    }
  }

  const fetchCarModel = (year: string) => {
    console.log(watch('type'), year)
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
              type={'text'}
              error={errors.nickName}
              {...register('nickName', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Min length is 3 symbols',
                },
              })}
            />
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Type
            </h3>

            <Listbox
              name='type'
              control={control}
              rules={{ required: true }}
              people={allCarTypes ? allCarTypes : []}
            />
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Brand
            </h3>

            <Listbox
              name='brand'
              control={control}
              rules={{ required: true }}
              people={allBrand ? allBrand : []}
            />
          </div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Release
            </h3>

            <Listbox
              name='release'
              control={control}
              rules={{ required: true }}
              people={allYers ? allYers : []}
              onClick={fetchCarModel}
            />
          </div>
        </div>
        <div>
          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Model
            </h3>

            <Listbox
              name='model'
              control={control}
              rules={{ required: true }}
              people={[]}
            />
          </div>

          <div>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Purchase time
            </h3>

            <Listbox
              name='purchaseTime'
              control={control}
              error={errors.purchaseTime}
              rules={{ required: true }}
              people={[]}
            />
          </div>
          <div className='mb-12'>
            <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
              Color
            </h3>

            {/* <Field
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
            ></Field> */}
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
