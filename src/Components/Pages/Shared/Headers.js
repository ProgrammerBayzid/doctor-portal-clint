import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/Context'

const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }
    const menuItems = <>
        <li><Link to='/home'> Home</Link></li>
        <li><Link to='/about'> About</Link></li>
        <li><Link to='/appoinment'> Appoinment</Link></li>
        <li><Link to='/contactUs'> Contacts Us</Link></li>
        <li><Link to='/dashboard'> Dashboard</Link></li>
        {user?.uid ?
            <div className='lg:flex items-center'>
                <li><Link to='/reviews'> Rewiews</Link></li>
                <li><Link to='/profile'>

                    {user?.photoURL ?
                        <img className='w-10 rounded-full' src={user.photoURL} />
                        :
                        <p>Profile</p>}

                </Link></li>
                <button onClick={handelLogOut}> Log Out</button>

            </div>
            :
            <>
                <li><Link to='/login'> Login</Link></li>
                <li><Link to='/singUp'> Sing Up</Link></li>
            </>}


    </>


    return (
        <div className="navbar bg-base-100 flex flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0  gap-2">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-dawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    )
}

export default Headers
