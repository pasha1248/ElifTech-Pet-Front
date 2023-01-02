/** @format */

import moment from 'moment'
import React from 'react'
import { IMessage } from '../../../../state/slice/messanger/messenger.interface'

type Props = {
  message: IMessage
}

const Message = ({ message }: Props) => {
  const timeago = moment(message?.createdAt).fromNow()
  return (
    <div className='flex flex-col'>
      <div>{message.text}</div>
      <div className='text-xs	'>{timeago}</div>
    </div>
  )
}

export default Message
