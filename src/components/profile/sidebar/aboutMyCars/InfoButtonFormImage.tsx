/** @format */

import React from 'react'
import { useActions } from '../../../../hooks/useActions'
import { carSelectServise } from '../../../../services/car/carSelect.service'
import { Typography } from '../../../../ui/Typography'
import { UploadPhotoRespons } from './FromAddPhotoCar'
// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'
import { GiArrowDunk } from 'react-icons/gi'

interface Props {
  photo: UploadPhotoRespons
  setPhotoUrl: any
  setPhotoId: any
  photoId?: any[]
  photoUrl?: any[]
  provided: any
  index: number
}

const InfoButtonFormImage: React.FC<Props> = ({
  photo,
  setPhotoUrl,
  setPhotoId,
  photoUrl,
  photoId,
  index,
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
    <div>
      <Typography className='mb-2 flex justify-center' type='Ag-16-semibold'>
        Number {index}
      </Typography>
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
          height={'120px'}
          width={'230px'}
        />
        <div className={openButtons ? styles.buttonsOpen : styles.buttons}>
          <ul>
            <li onClick={deletePhotos}>Delete</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfoButtonFormImage
