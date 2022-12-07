/** @format */

import React, { useCallback } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { notifyError } from '../../../common/notifications/notifications'
import { useActions } from '../../../hooks/useActions'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../../common/enums/app-routes.enum'

const GoogleButton = (props: any) => {
  const { authWithGoogle } = useActions()
  const navigate = useNavigate()

  const googleAuth = useCallback((token: any) => {
    authWithGoogle(token)
  }, [])

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_API_GOOGLE_ID}`}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            googleAuth(credentialResponse.credential)
            navigate(AppRoute.HOME)
          }}
          type='standard'
          onError={() => {
            notifyError('Authorization failed')
          }}
          theme='filled_black'
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleButton
