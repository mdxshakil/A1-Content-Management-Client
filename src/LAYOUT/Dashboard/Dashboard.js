import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <SideNav></SideNav>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard