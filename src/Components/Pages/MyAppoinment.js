import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/Context'
import Booking from './Booking';

const MyAppoinment = () => {
    const { user } = useContext(AuthContext);
    // const [bookings, setBookings] = useState([]);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`https://doctors-portal-server-ten-alpha.vercel.app/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
    });
    // useEffect(() => {
    //     fetch(`https://doctors-portal-server-ten-alpha.vercel.app/booking?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [])

    return (
        <div className='mt-10 w-full'>
            <h1 className='text-3xl font-semibold mb-5'>My Appoinment</h1>
            <div className='overflow-x-auto'>
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient Name</th>
                            <th>Treatment Name</th>
                            <th>Time</th>
                            <th>Appoinment Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {
                        bookings.map((booking, i) =>
                            <Booking
                                index={i}
                                key={booking._id}
                                booking={booking}
                            ></Booking>)
                    }
                </table>
            </div>
        </div>
    )
}

export default MyAppoinment
