/** @format */

import React from 'react'
import { useActions } from '../../../hooks/useActions'

interface Props {
  userId: string
}

const ButtonForMessanger = ({ userId }: Props) => {
  const { createChat } = useActions()

  const getChat = () => {
    createChat(userId)
  }

  return (
    <button
      className='flex items-center justify-center border-2 border-blue-500 border-solid		 rounded-3xl p-2 text-white bg-transparent bg-opacity-80 transition-all duration-300 hover:opacity-50	;
'
      onClick={getChat}
    >
      Message
    </button>
  )
}

export default ButtonForMessanger
