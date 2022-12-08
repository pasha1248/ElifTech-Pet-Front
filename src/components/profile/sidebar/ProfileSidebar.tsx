/** @format */

import React from 'react'
import ProfileAboutMyCars from './aboutMyCars/ProfileAboutMyCars'
import ProfileAboutMe from './profileAboutMe/ProfileAboutMe'
// @ts-ignore:next-line
import styles from './ProfileSidebar.module.scss'

interface Props {}

const ProfileSidebar = (props: Props) => {
  return (
    <div className={styles.container}>
      <ProfileAboutMe />
      <ProfileAboutMyCars />
    </div>
  )
}

export default ProfileSidebar
