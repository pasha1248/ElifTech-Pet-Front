/** @format */

import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  notifyError,
  notifyLoading,
  notifySuccess,
  notifySuccessSendCode,
} from '../../../../common/notifications/notifications'
import { IMediaResponse } from '../../../../services/car/carSelect.interface'
import { api } from '../../../../state/api-rtk/api-rtk'
import { carSelectApi } from '../../../../state/api-rtk/car-select.api'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import DragAndDrop from '../../../../ui/drag&drop/DragAndDrop'
import FieldUploadFoto from '../../../../ui/fields/FieldUploadFoto'
import TextArea from '../../../../ui/text-area/TextArea'
import { Typography } from '../../../../ui/Typography'
import { IFormAboutCarCharacteristics } from './FormAboutСharacteristicsCar'
import InfoButtonFormImage from './InfoButtonFormImage'
import { Draggable } from '@hello-pangea/dnd'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'
import ContainerForUploadPhoto from './ContainerForUploadPhoto'
import TestGrag from '../../../../ui/drag&drop/DragAndDrop'
import { initValueForCreateCarForm } from './AddNewCarForm'
import { MdArrowBackIosNew, MdNavigateNext } from 'react-icons/md'

export interface IFormAboutCarPhoto extends IFormAboutCarCharacteristics {
  photo: string[]
  description: string
}

export interface UploadPhotoRespons {
  createdAt: string

  id: string
  isMain: boolean
  path: string
  updatedAt: string
}

const FromAddPhotoCar = ({
  photoId,
  setPhotoId,
  photoUrl,
  setPhotoUrl,
  defaultValue,
  clearDefault,
  changePage,
  increment,
  decrement,
}: any) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormAboutCarPhoto>({
    mode: 'onChange',
    defaultValues: defaultValue,
  })

  const [createCar, { isLoading, error, isSuccess }] =
    carSelectApi.useCreateCarMutation()

  console.log(photoUrl)

  const onSubmit: SubmitHandler<
    Pick<IFormAboutCarPhoto, 'photo' & 'description'>
  > = async dataFrom => {
    const submitData: IFormAboutCarPhoto = { ...defaultValue, ...dataFrom }
    const newPhoto: string[] = []
    photoUrl.map((photo: UploadPhotoRespons) => {
      newPhoto.push(photo.id)
    })

    const data = {
      model: submitData.model,
      description: submitData.description,
      photoPath: newPhoto,
      name: submitData.nickName,
      yearOfPurchase: submitData.purchaseTime,
      year: submitData.release,
      color: submitData.color,
      type: submitData.type,
      pastCar: submitData.oldCar,
      brand: submitData.brand,
      engineCapacityLiters: submitData.engineCapacityLiters,
      mileage: submitData.mileage,
      motor: submitData.motor,
      transmission: submitData.transmission,
      driveUnit: submitData.driveUnit,
    }

    const idNoti = toast.loading('Please wait...')

    await createCar(data)
      .then(() => {
        notifySuccessSendCode(idNoti, 'Car created')
        clearDefault(initValueForCreateCarForm)
        setPhotoUrl([])
        changePage(1)
      })
      .catch(error =>
        toast.update(idNoti, {
          render: 'Error',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        })
      )
  }

  return (
    <div>
      <Typography type={'h1'} style={{ fontSize: '25px' }} className={'mb-4'}>
        Select a photo
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.photosContainer}>
          <div>
            <div>
              <FieldUploadFoto
                folder='carPhoto'
                onChange={(val: UploadPhotoRespons) => {
                  setPhotoId([...photoId, val.id])
                  setPhotoUrl([...photoUrl, val])
                }}
              />
              {errors.photo && 'Error'}
            </div>

            <div>
              <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	my-3.5'>
                Describe your car
              </h3>
              <TextArea
                {...register('description', {
                  required: 'Description is required',
                })}
                placeholder='Description'
                error={errors.description}
              />
              {errors.description && 'Error'}
            </div>
          </div>
          <div>
            <ContainerForUploadPhoto
              setPhotoUrl={setPhotoUrl}
              setPhotoId={setPhotoId}
              photoUrl={photoUrl}
              photoId={photoId}
            />
          </div>
          {/* <TestGrag /> */}
        </div>
        <div className='flex justify-between	mt-4 gap-6'>
          <ButtonAuth onClick={decrement} className='w-full mt-6'>
            <MdArrowBackIosNew
              color='blue'
              size={32}
              className='ml-2'
              style={{ color: 'white' }}
            />
            decrement
          </ButtonAuth>

          <ButtonAuth type='submit' className='w-full mt-6'>
            Create car{' '}
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

export default FromAddPhotoCar
