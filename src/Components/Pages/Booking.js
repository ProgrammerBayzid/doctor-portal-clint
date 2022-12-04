import React from 'react'
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';

const Booking = ({ booking, index }) => {
    const { treatmentName, appoinmentDate, patientName, slot, price, paid, _id } = booking;
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>  {patientName}</td>
                <td>{treatmentName}</td>
                <td>  {slot}</td>
                <td> {appoinmentDate}</td>
                <td>

                    {
                        price && !paid &&
                        <Link to={`/dashboard/payment/${_id}`}>
                            <button className='btn btn-primary'>Pay</button>
                        </Link>
                    }
                    {
                        price && paid && <span className='btn-green-500'>Paid</span>
                    }
                </td>

            </tr>

        </tbody>
    )
}

export default Booking
