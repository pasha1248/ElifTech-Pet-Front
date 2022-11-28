/** @format */

import React, { useCallback } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { notifyError } from '../../../common/notifications/notifications'
import { useActions } from '../../../hooks/useActions'

const GoogleButton = (props: any) => {
  const { authWithGoogle } = useActions()

  const googleAuth = useCallback((token: any) => {
    authWithGoogle(token)
  }, [])

  return (
    <>
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_API_GOOGLE_ID}`}>
        <GoogleLogin
          onSuccess={credentialResponse =>
            googleAuth(credentialResponse.credential)
          }
          type='standard'
          onError={() => {
            notifyError('Authorization failed')
          }}
          theme='filled_black'
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default GoogleButton
