/** @format */

import React from 'react'
import { IUser } from '../../../../state/slice/user-slice/user.interface'
// @ts-ignore:next-line
import styles from './ProfileAboutMe.module.scss'

interface IPersonalInfo {
  user?: IUser | null
}

const PersonalInfo: React.FC<IPersonalInfo> = ({ user }) => {
  return (
    <div className={styles.containerForInfo}>
      <div className={styles.item}>
        <h3>{user?.subscribersCount}</h3>
        <p>friends</p>
      </div>
      <div className={styles.item}>
        <h3>{user?.cars.length || 0}</h3>
        <p>had cars</p>
      </div>
      <div className={styles.item}>
        <h3>{user?.lastName || 'New'}</h3>

        <p>status </p>
      </div>
    </div>
  )
}

export default PersonalInfo
