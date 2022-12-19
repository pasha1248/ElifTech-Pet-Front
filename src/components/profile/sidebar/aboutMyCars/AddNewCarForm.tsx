/** @format */

import React from 'react'
import { useMultiForm } from '../../../../hooks/useMultiForm'
import ProgressBarForm from './progressBarForCar/ProgressBarForm'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'
import FormAboutCar from './FormAboutCar'
import FormAboutСharacteristicsCar from './FormAboutСharacteristicsCar'
import FromAddPhotoCar, { UploadPhotoRespons } from './FromAddPhotoCar'

type Props = {}

const AddNewCarForm = (props: Props) => {
  const { decrement, increment, page, totalPage } = useMultiForm(3)
  const [photoId, setPhotoId] = React.useState<string[]>([])
  const [photoUrl, setPhotoUrl] = React.useState<UploadPhotoRespons[] | any>([])

  const [fields, setFields] = React.useState({
    oldCar: false,
    carPhoto: [],
  })

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
          increment={increment}
          decrement={decrement}
        />
      )}

      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default AddNewCarForm
