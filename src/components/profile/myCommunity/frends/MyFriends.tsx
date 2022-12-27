/** @format */

import React from 'react'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import { api } from '../../../../state/api-rtk/api-rtk'
import { ISubscription } from '../../../../state/slice/user-slice/user.interface'
import { Typography } from '../../../../ui/Typography'
import UserAvatar from '../../../user/user.avatar/UserAvatar'
// @ts-ignore: next-line
import styles from './MyFriends.module.scss'
import SmallIconForFriend from './smallIconFormFrend/SmallIconForFriend'

type Props = {}

const MyFriends = (props: Props) => {
  const { user } = useAppSelector(state => state.authSlice)

  const { data: profile } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  return (
    <div className={styles.containerNeo}>
      <Typography type='Ag-16-semibold'>My Friends</Typography>

      {profile?.subscriptions.map((user: ISubscription) => (
        <UserAvatar key={user.id} user={user.toChannel} />
      ))}

      {/* {data?.subscriptions.map((subscriber) => (
         <SmallIconForFriend subscriber={subscriber}/>
      )} */}
    </div>
  )
}

export default MyFriends
