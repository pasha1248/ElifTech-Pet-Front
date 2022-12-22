/** @format */

import React from 'react'
import { ICar } from '../../../state/type/car.interface'

//@ts-ignore:next-line
import styles from './CarCard.module.scss'

interface ICarCard {
  car: ICar
  isSmall?: boolean
}

const CarCard: React.FC<ICarCard> = ({ car, isSmall = false }) => {
  console.log(car)
  return (
    <div className={styles.containerForSmallCar}>
      {/* <div
        style={{
          backgroundImage: `url(${
            car.photosPath[0]['path'] ||
            'https://img.freepik.com/free-vector/front-car-concept-illustration_114360-7978.jpg?w=2000&t=st=1670604304~exp=1670604904~hmac=a747b3556ab2893e16a99233a8c18e2a9899a976cf0105eabf65d27c2db4b1ba'
          })`,
        }}
      > */}
      <img
        src={
          car.photosPath[0]['path'] ||
          'https://img.freepik.com/free-vector/front-car-concept-illustration_114360-7978.jpg?w=2000&t=st=1670604304~exp=1670604904~hmac=a747b3556ab2893e16a99233a8c18e2a9899a976cf0105eabf65d27c2db4b1ba'
        }
        alt='car.name'
      />
      <div className={styles.iconFromPhoto}>
        <h3>{car.model}</h3>
        <h3>{car.brand}</h3>
      </div>
    </div>
  )
}

export default CarCard
