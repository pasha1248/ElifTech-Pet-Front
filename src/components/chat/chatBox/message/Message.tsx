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
    <div>
      <span>{message.text}</span>
      <span>{timeago}</span>
    </div>
  )
}

export default Message
