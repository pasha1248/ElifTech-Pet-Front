/** @format */

import React from 'react'
import ProfilePosts from '../../components/profile/posts/ProfilePosts'
import ProfileSidebar from '../../components/profile/sidebar/ProfileSidebar'
// @ts-ignore:next-line
import styles from './MyProfilePage.module.scss'

interface Props {}

const MyProfilePage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <ProfileSidebar />
      </div>
      <div style={{ background: 'orange' }}>
        <ProfilePosts />
      </div>
      <div style={{ background: 'orange' }}>Hello</div>
    </div>
  )
}

export default MyProfilePage
