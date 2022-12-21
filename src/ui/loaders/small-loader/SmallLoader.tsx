/** @format */

import React from 'react'
// @ts-ignore:next-line
import styles from './SmallLoader.module.scss'

interface Props {}

const SmallLoader = (props: Props) => {
  return (
    <div>
      <div className={styles.loader}></div>
    </div>
  )
}

export default SmallLoader
