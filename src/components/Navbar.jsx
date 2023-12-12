import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Navbar = () => {
  const [userDetails,setUserDetails]=useState(false)
  const {navShow,setNavShow}=useContext(UserContext)
  return (
    <>
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg onClick={()=>{
              setNavShow(!navShow)
            }} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <Link to="/" className="flex ms-2 md:me-24">
          <img src="https://i.pinimg.com/originals/16/1f/cd/161fcda88bb08717334cdb15c1ebafe0.jpg" className="h-12 me-3 rounded-full" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">RANGER POS</span>
        </Link>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            <div>
              <button type="button" className="flex  text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={()=>{
                setUserDetails(!userDetails)
              }}>
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="user photo"/>
              </button>
            </div>
            {<div className={userDetails?"absolute top-10 right-0 z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600":"hidden"}>
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Rakesh Kumar
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                 rakeshkumar84548@gmail.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Orders</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>}
          </div>
        </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar