/** @format */

import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import FieldUploadFoto from '../../../../ui/fields/FieldUploadFoto'
import TextArea from '../../../../ui/text-area/TextArea'
import { Typography } from '../../../../ui/Typography'

type IFormAboutCarPhoto = {
  photo: string
  description: string
}

const FromAddPhotoCar = ({ defaultValue, setFields, increment }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormAboutCarPhoto>({
    mode: 'onChange',
    defaultValues: defaultValue,
  })

  return (
    <div className='mx-40'>
      <Typography type={'h1'} style={{ fontSize: '25px' }}>
        Select a photo
      </Typography>
      <div>
        <FieldUploadFoto />

        <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
          Describe your car
        </h3>
        <TextArea
          {...register('description', {
            required: 'Description is required',
          })}
          placeholder='Description'
          error={errors.description}
        />
        <div>
          <ButtonAuth>Create car</ButtonAuth>
        </div>
      </div>
    </div>
  )
}

export default FromAddPhotoCar
