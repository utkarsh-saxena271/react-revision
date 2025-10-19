import React from 'react'
import UserProvider from './UserProvider'
import AuthProvider from './AuthProvider'

const ContextsProvider = (props) => {
  return (
    <UserProvider>
        <AuthProvider>
            {props.children}
        </AuthProvider>
    </UserProvider>
  )
}

export default ContextsProvider