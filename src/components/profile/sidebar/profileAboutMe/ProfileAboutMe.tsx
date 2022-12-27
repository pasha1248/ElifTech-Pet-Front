/** @format */

import React from 'react'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import { api } from '../../../../state/api-rtk/api-rtk'
import ProfileAvatar from './ProfileAvatar'
// @ts-ignore:next-line
import styles from './ProfileAboutMe.module.scss'
import PersonalInfo from './PersonalInfo'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import SubscribeButton from '../../../../ui/buttons/subscribeButton/SubscribeButton'
import ButtonForMessanger from '../../../../ui/buttons/buttonFormMessenger/ButtonForMessanger'

interface Props {}

const ProfileAboutMe = (props: Props) => {
  const { user } = useAppSelector(state => state.userSlice)
  const { user: authUser } = useAppSelector(state => state.authSlice)

  console.log(user)

  if (!user) {
    return null
  }
  return (
    <div>
      <div className='w-full'>
        <ProfileAvatar user={user} />
        <div className={styles.name}>
          <h3
            style={{ fontSize: '25px' }}
          >{`${user?.firstName} ${user?.lastName}`}</h3>
        </div>
        <PersonalInfo user={user} />
        {user.id !== authUser?.id && (
          <div className='flex gap-3 justify-between'>
            <ButtonForMessanger userId={user.id} />
            <SubscribeButton channelIdFortSubscribe={user.id} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileAboutMe
