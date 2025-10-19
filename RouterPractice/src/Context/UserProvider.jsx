import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [existingUsers, setExistingUsers] = useState(null)
    return (
      <UserContext.Provider value={{currentUser, setCurrentUser, existingUsers, setExistingUsers}}>
        {props.children}
      </UserContext.Provider>
  )
}

export default UserProvider