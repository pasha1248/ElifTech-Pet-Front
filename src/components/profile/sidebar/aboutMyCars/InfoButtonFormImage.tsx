/** @format */

import React from 'react'
import { UploadPhotoRespons } from './FromAddPhotoCar'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'

interface Props {
  photo: UploadPhotoRespons
}

const InfoButtonFormImage: React.FC<Props> = ({ photo }) => {
  const [openButtons, setOpenButtons] = React.useState(false)

  return (
    <div
      className={styles.smallImage}
      onMouseOver={() => setOpenButtons(true)}
      onMouseOut={() => setOpenButtons(false)}
    >
      <img
        src={photo.path}
        key={photo.id}
        alt={photo.id}
        height={'88px'}
        width={'170px'}
      />
      <div className={openButtons ? styles.buttonsOpen : styles.buttons}>
        <ul>
          <li>Make main</li>
          <li>Delete</li>
        </ul>
      </div>
    </div>
  )
}

export default InfoButtonFormImage
