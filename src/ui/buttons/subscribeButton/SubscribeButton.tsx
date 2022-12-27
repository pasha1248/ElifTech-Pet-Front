/** @format */

import React, { FC } from 'react'
import cn from 'classnames'

// @ts-ignore:next-line
import styles from './SubscribeButton.module.scss'
import { BsPersonPlusFill } from 'react-icons/bs'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import { api } from '../../../state/api-rtk/api-rtk'
import { ISubscription } from '../../../state/slice/user-slice/user.interface'

type Props = {}

const SubscribeButton: FC<{ channelIdFortSubscribe: string }> = ({
  channelIdFortSubscribe,
}) => {
  const { user } = useAppSelector(state => state.authSlice)

  const { data: profile } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  const [subscribe, { data, isLoading }] = api.useSubscribeToUserMutation()

  if (user?.id === channelIdFortSubscribe) return null

  const isSubscribed =
    profile?.subscriptions?.some(
      (sub: ISubscription) => sub.toChannel.id === channelIdFortSubscribe
    ) || !!data

  return (
    <button
      className={cn(styles.button, {
        [styles.subscribed]: !isSubscribed,
      })}
      onClick={() => subscribe(channelIdFortSubscribe).unwrap()}
      disabled={isLoading}
    >
      <BsPersonPlusFill />
      {!isSubscribed ? 'Please subscribe' : 'You are a subscriber'}
    </button>
  )
}

export default SubscribeButton
