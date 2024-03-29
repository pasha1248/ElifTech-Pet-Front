/** @format */

import React from 'react'
import { useMultiForm } from '../../../../hooks/useMultiForm'
import ProgressBarForm from './progressBarForCar/ProgressBarForm'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'
import FormAboutCar from './FormAboutCar'
import FormAboutСharacteristicsCar from './FormAboutСharacteristicsCar'
import FromAddPhotoCar, { UploadPhotoRespons } from './FromAddPhotoCar'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'

type Props = {}
export const initValueForCreateCarForm = {
  oldCar: false,
  carPhoto: [],
  brand: 'Select your',
  model: 'Select your',
  type: 'Select your',
  generation: 'Select your',
  release: 'Select your',
  purchaseTime: 'Select your',
  color: 'Select your',
  motor: 'Select your',
  engineCapacityLiters: 'Select your',
  transmission: 'Select your',
  driveUnit: 'Select your',
}

const AddNewCarForm = (props: Props) => {
  const { decrement, increment, page, totalPage, changePage } = useMultiForm(3)
  const [photoId, setPhotoId] = React.useState<string[]>([])
  const [photoUrl, setPhotoUrl] = React.useState<UploadPhotoRespons[] | any>([])

  const [fields, setFields] = React.useState(initValueForCreateCarForm)

  return (
    <div className={styles.containerForm}>
      <ProgressBarForm page={page} />

      {page === 1 && (
        <FormAboutCar
          defaultValue={fields}
          setFields={setFields}
          increment={increment}
          decrement={decrement}
        />
      )}
      {page === 2 && (
        <FormAboutСharacteristicsCar
          defaultValue={fields}
          setFields={setFields}
          increment={increment}
          decrement={decrement}
        />
      )}
      {page === 3 && (
        <FromAddPhotoCar
          photoId={photoId}
          setPhotoId={setPhotoId}
          photoUrl={photoUrl}
          setPhotoUrl={setPhotoUrl}
          defaultValue={fields}
          clearDefault={setFields}
          increment={increment}
          decrement={decrement}
          changePage={changePage}
        />
      )}
    </div>
  )
}

export default AddNewCarForm
