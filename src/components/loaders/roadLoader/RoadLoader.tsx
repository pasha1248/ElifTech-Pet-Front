/** @format */

import React from 'react'
import { useAppSelector } from '../../../hooks/useReduxHooks'
// @ts-ignore:next-line
import styles from './RoadLoader.module.scss'

type Props = {}

const RoadLoader = (props: Props) => {
  const { isLoading } = useAppSelector(state => state.authSlice)
  return (
    <div>
      <div
        className={isLoading ? styles.containerActive : styles.containerModal}
      >
        <div className={styles.popap} onClick={e => e.stopPropagation()}>
          <div className={styles.container}>
            <div className={styles.infinite}>
              <div className={styles.shadow}></div>
            </div>
            <div className={styles.box}>
              <div className={styles.square}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadLoader
