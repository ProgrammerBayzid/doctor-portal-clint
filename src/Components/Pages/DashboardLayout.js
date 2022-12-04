import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Headers from './Shared/Headers'
import appoinment from '../../assets/icons/appointment.png'
import { FaUser } from 'react-icons/fa'
import { AuthContext } from '../../Context/Context'
import useAdmin from '../../api/useAdmin'


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Headers></Headers>
            <div className="drawer drawer-mobile">
                <input id="dashboard-dawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-dawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        < li >
                            <Link to='appoinment'>
                                <span className='flex gap-2 p-2'>
                                    <img className='w-6' src={appoinment} alt="" srcset="" /> <p className='font-bold'>My Appoinment</p>
                                </span>
                            </Link>
                        </li>

                        {
                            isAdmin &&
                            <>
                                < li >
                                    <Link to='allusers'>
                                        <span className='flex gap-3 p-2 '>
                                            <FaUser /> <p className='font-bold'>All User</p>
                                        </span>
                                    </Link>
                                </li>
                                < li >
                                    <Link to='adddoctor'>
                                        <span className='flex gap-3 p-2 '>
                                            <FaUser /> <p className='font-bold'>Add Doctor</p>
                                        </span>
                                    </Link>
                                </li>
                                < li >
                                    <Link to='managedoctors'>
                                        <span className='flex gap-3 p-2 '>
                                            <FaUser /> <p className='font-bold'>Manage Doctors</p>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
