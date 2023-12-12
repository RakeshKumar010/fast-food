import React, { useEffect } from 'react'

import UserContextProvider from './context/UserContextProvider'
import Layout from './layout/Layout'

import './App.css'
const App = () => {

  return (
    <UserContextProvider>
    <Layout/>
    </UserContextProvider>
  )
}

export default App