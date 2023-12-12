import React from 'react'
import SideBar from './components/SideBar'
import Items from './components/Items'
import Orders from './components/Orders'
import FullPage from './components/FullPage'
import Navbar from './components/Navbar'

const HomePage = () => {
  
  return (
    <>
    <Navbar/>
    <SideBar/>
    <Items/>
    </>
    // <div className='flex justify-between'>
    // <SideBar/>
    // <Items/>
    // <Orders/>
    // </div>
  )
}

export default HomePage