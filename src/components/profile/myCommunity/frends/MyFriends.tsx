/** @format */

import React from 'react'
import { api } from '../../../../state/api-rtk/api-rtk'
import { Typography } from '../../../../ui/Typography'
// @ts-ignore: next-line
import styles from './MyFriends.module.scss'
import SmallIconForFriend from './smallIconFormFrend/SmallIconForFriend'

type Props = {}

const MyFriends = (props: Props) => {
  const { data, isLoading } = api.useGetProfileQuery(null)

  return (
    <div className={styles.containerNeo}>
      <Typography type='Ag-16-semibold'>My Friends</Typography>

      {/* {data?.subscriptions.map((subscriber) => (
         <SmallIconForFriend subscriber={subscriber}/>
      )} */}
    </div>
  )
}

export default MyFriends
