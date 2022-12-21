/** @format */

import { notifyError } from './../common/notifications/notifications'
/** @format */

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { carSelectServise } from '../services/car/carSelect.service'

export const useUploadFile = (
  onChange: (...event: any) => void,
  folder?: string,
  setValue?: (val: number) => void,
  setIsChosen?: Dispatch<SetStateAction<boolean>>
) => {
  const [loading, setLoading] = React.useState(false)

  const uploadCarPhopo = async (formData: FormData) => {
    setLoading(true)
    const responce = await carSelectServise
      .upload(formData, folder, setValue)
      .then(res => {
        onChange(res.data)
        setLoading(false)
      })
      .catch(error => {
        notifyError('Error')
        setLoading(false)
      })
  }

  const uploadFile = async (e: any) => {
    const files = e

    if (!files?.length) return

    const formData = new FormData()
    formData.append('media', files[0])

    await uploadCarPhopo(formData)
  }

  return {
    uploadFile,
    loading,
  }
}
