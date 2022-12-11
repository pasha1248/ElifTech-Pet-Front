/** @format */

import React, { FC, PropsWithChildren } from 'react'
// @ts-ignore: nextline
import styles from '../../components/loaders/roadLoader/RoadLoader.module.scss'

type Props = {
  active: boolean
  setActive?: any
}

const BasicModalScreen: FC<PropsWithChildren<Props>> = ({
  active = false,
  setActive,
  children,
}) => {
  return (
    <div
      className={active ? styles.containerActive : styles.containerModal}
      onClick={setActive}
    >
      <div className={styles.popap} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default BasicModalScreen
