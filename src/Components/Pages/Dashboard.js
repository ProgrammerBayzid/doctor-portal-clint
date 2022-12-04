import React from 'react'
import { Outlet } from 'react-router-dom'
import MyAppoinment from './MyAppoinment'
import Headers from './Shared/Headers'

const Dashboard = () => {
    return (
        <div className='w-full bg-slate-100	p-10'>
            <MyAppoinment></MyAppoinment>
        </div>
    )
}

export default Dashboard
