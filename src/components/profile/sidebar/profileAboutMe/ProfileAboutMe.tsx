/** @format */

import React from 'react'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import { api } from '../../../../state/api-rtk/api-rtk'
import ProfileAvatar from './ProfileAvatar'
// @ts-ignore:next-line
import styles from './ProfileAboutMe.module.scss'
import PersonalInfo from './PersonalInfo'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'

interface Props {}

const ProfileAboutMe = (props: Props) => {
  const { user } = useAppSelector(state => state.userSlice)
  const { user: user2 } = useAppSelector(state => state.userSlice)

  console.log(user)

  if (!user) {
    return null
  }
  return (
    <div>
      <div>
        <ProfileAvatar user={user} />
        <div className={styles.name}>
          <h3
            style={{ fontSize: '25px' }}
          >{`${user?.firstName} ${user?.lastName}`}</h3>
        </div>
        <PersonalInfo user={user} />
        {user.id !== user2?.id && <ButtonAuth></ButtonAuth>}
      </div>
    </div>
  )
}

export default ProfileAboutMe
