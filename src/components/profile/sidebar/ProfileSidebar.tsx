/** @format */

import React from 'react'
import ProfileAboutMyCars from './aboutMyCars/ProfileAboutMyCars'
import ProfileAboutMe from './profileAboutMe/ProfileAboutMe'
// @ts-ignore:next-line
import styles from './ProfileSidebar.module.scss'

interface Props {}

const ProfileSidebar = (props: Props) => {
  return (
    <div>
      <div className={styles.container}>
        <ProfileAboutMe />
      </div>
      <div className={styles.container}>
        <ProfileAboutMyCars />
      </div>
    </div>
  )
}

export default ProfileSidebar
