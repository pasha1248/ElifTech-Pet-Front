/** @format */

import React from 'react'
import { ICar } from '../../../state/type/car.interface'

//@ts-ignore:next-line
import styles from './CarCar.module.scss'

interface ICarCard {
  car: ICar
  isSmall?: boolean
}

const CarCard: React.FC<ICarCard> = ({ car, isSmall = false }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            car.photoPath ||
            'https://img.freepik.com/free-vector/front-car-concept-illustration_114360-7978.jpg?w=2000&t=st=1670604304~exp=1670604904~hmac=a747b3556ab2893e16a99233a8c18e2a9899a976cf0105eabf65d27c2db4b1ba'
          })`,
        }}
      >
        <div>
          <h3>{car.name}</h3>
          <h3>{car.subscribers}</h3>
        </div>
      </div>
    </div>
  )
}

export default CarCard
