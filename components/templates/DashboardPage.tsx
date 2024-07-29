
"use client"
import React, { useState } from 'react'
import Navbar from '../modules/Navbar'
import UserDetails from './UserDetails';
import UserLogs from './UserLogs';


const DashboardPage = ({session}: any) => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex gap-3 h-[500px]'>
      <Navbar session={session} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <div className='flex-1'>
        {activeIndex === 0 && <UserDetails />}
        {activeIndex === 1 && <UserLogs />}

      </div>
    </div>
  )
}

export default DashboardPage