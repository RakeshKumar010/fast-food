import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  )
}

export default App