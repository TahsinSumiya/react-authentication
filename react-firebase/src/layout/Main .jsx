import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../comonents/Header/Header'

const Main  = () => {
  return (
    <>
    <div className='design'>
        <div className='child'>
        <Header/>
        <Outlet/>
        </div>

    </div>
   
    
    </>
  )
}

export default Main 