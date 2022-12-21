/** @format */

import React from 'react'
import { useActions } from '../../../../hooks/useActions'
import { carSelectServise } from '../../../../services/car/carSelect.service'
import { UploadPhotoRespons } from './FromAddPhotoCar'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'

interface Props {
  photo: UploadPhotoRespons
  setPhotoUrl: any
  setPhotoId: any
  photoId?: any[]
  photoUrl?: any[]
  provided: any
}

const InfoButtonFormImage: React.FC<Props> = ({
  photo,
  setPhotoUrl,
  setPhotoId,
  photoUrl,
  photoId,
  provided,
}) => {
  const [openButtons, setOpenButtons] = React.useState(false)
  const { deletePhoto } = useActions()
  const deletePhotos = async () => {
    try {
      deletePhoto({ photoId: photo.id, photoUrl: photo.path })

      if (!photoId || !photoUrl) {
        return
      }
      console.log(photoUrl)
      console.log(photo.id)
      setPhotoUrl(photoUrl.filter(el => el.id !== photo.id))
    } catch (error) {}
  }

  return (
    <div
      className={styles.smallImage}
      onMouseOver={() => setOpenButtons(true)}
      onMouseOut={() => setOpenButtons(false)}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
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
          <li onClick={deletePhotos}>Delete</li>
        </ul>
      </div>
    </div>
  )
}

export default InfoButtonFormImage
