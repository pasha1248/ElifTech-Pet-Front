/** @format */

import React from 'react'
import { useMultiForm } from '../../../../hooks/useMultiForm'
import ProgressBarForm from './progressBarForCar/ProgressBarForm'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'
import FormAboutCar from './FormAboutCar'
import FormAboutСharacteristicsCar from './FormAboutСharacteristicsCar'
import FromAddPhotoCar from './FromAddPhotoCar'

type Props = {}

const AddNewCarForm = (props: Props) => {
  const { decrement, increment, page, totalPage } = useMultiForm(3)

  const [fields, setFields] = React.useState({
    model: 'audi',
    oldCar: false,
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
          defaultValue={fields}
          setFields={setFields}
          increment={increment}
          decrement={decrement}
        />
      )}

      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default AddNewCarForm
