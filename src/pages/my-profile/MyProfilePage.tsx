/** @format */

import React from 'react'
import { useParams } from 'react-router-dom'
import MyFriends from '../../components/profile/myCommunity/frends/MyFriends'
import ProfilePosts from '../../components/profile/posts/ProfilePosts'
import ProfileSidebar from '../../components/profile/sidebar/ProfileSidebar'
import { useActions } from '../../hooks/useActions'
import { useAppDispatch } from '../../hooks/useReduxHooks'
import { userApi } from '../../state/api-rtk/user.api'
import { saveUserInStore } from '../../state/slice/user-slice/user.slice'
// @ts-ignore:next-line
import styles from './MyProfilePage.module.scss'

interface Props {}

const MyProfilePage = (props: Props) => {
  const param = useParams()
  const { getProfileFromParam } = useActions()
  const { id } = param

  React.useEffect(() => {
    if (id === undefined) {
      return
    }
    getProfileFromParam(id)
  }, [param])

  console.log(param)

  return (
    <div className={`${styles.container}`}>
      <div>
        <ProfileSidebar />
      </div>
      <div>
        <ProfilePosts />
      </div>
      <div>
        <MyFriends />
      </div>
    </div>
  )
}

export default MyProfilePage
