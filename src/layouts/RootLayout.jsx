import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='w-11/12 mx-auto'>
           <Outlet></Outlet> 
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default RootLayout