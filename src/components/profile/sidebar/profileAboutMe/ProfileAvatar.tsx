/** @format */

import React from 'react'
import { IUser } from '../../../../state/slice/user-slice/user.interface'
// @ts-ignore:next-line
import styles from './ProfileAboutMe.module.scss'

interface IProfileAvatar {
  user?: IUser | null
}

const ProfileAvatar: React.FC<IProfileAvatar> = ({ user }) => {
  return (
    <div className={styles.containerForAvatars}>
      <div
        style={{
          backgroundImage: `${
            user?.background
              ? user?.background
              : "url('https://img.freepik.com/free-photo/reflection-of-rocky-mountains-and-sky-on-beautiful-lake_23-2148153610.jpg?w=2000&t=st=1670533714~exp=1670534314~hmac=4c81dc55afdfb5d6a4cb42552e75f42d9f1216a6ac3fbd03aaa5a698ea680c5a')"
          }`,
        }}
        className={styles.background}
      >
        <img
          src={
            user?.avatarPath ||
            'http://cdn-icons-png.flaticon.com/512/147/147142.png'
          }
          alt={user?.firstName}
          className={styles.avatar}
        />
      </div>
      <div></div>
    </div>
  )
}

export default ProfileAvatar
