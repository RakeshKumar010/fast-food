import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  const [navShow,setNavShow]=useState(true)

  return (
    <UserContext.Provider value={{navShow,setNavShow}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider