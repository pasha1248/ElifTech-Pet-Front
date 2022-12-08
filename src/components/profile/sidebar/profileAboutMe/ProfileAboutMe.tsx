/** @format */

import React from 'react'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import { api } from '../../../../state/api-rtk/api-rtk'
import ProfileAvatar from './ProfileAvatar'
// @ts-ignore:next-line
import styles from './ProfileAboutMe.module.scss'

interface Props {}

const ProfileAboutMe = (props: Props) => {
  const { user } = useAppSelector(
    (state: { authSlice: any }) => state.authSlice
  )

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  console.log(user)

  return (
    <div>
      <div>
        <ProfileAvatar user={data} />
        <div className={styles.name}>
          <h4>{`${data?.firstName} ${data?.lastName}`}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProfileAboutMe
