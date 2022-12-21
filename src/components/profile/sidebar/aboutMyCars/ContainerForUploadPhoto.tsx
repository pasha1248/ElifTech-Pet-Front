/** @format */

import React from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

// @ts-ignore: next-line
import styles from './ProfileAboutMyCars.module.scss'
import { UploadPhotoRespons } from './FromAddPhotoCar'
import InfoButtonFormImage from './InfoButtonFormImage'
interface Props {}

const ContainerForUploadPhoto = ({
  setPhotoUrl,
  setPhotoId,
  photoUrl: photos,
  photoId,
}: any) => {
  function handleOnDragEnd(result: any) {
    if (!result.destination) return

    const items = Array.from(photos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setPhotoUrl(items)
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='photoUrl'>
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.containerImages}
            >
              {photos.length &&
                photos.map((photo: UploadPhotoRespons, index: number) => (
                  <Draggable
                    key={photo.id}
                    draggableId={photo.id}
                    index={index}
                  >
                    {provided => (
                      <InfoButtonFormImage
                        provided={provided}
                        photo={photo}
                        setPhotoUrl={setPhotoUrl}
                        setPhotoId={setPhotoId}
                        photoUrl={photos}
                        photoId={photoId}
                      />
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default ContainerForUploadPhoto
