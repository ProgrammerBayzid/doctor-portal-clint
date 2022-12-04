import { format } from 'date-fns';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/Context';

const BookingModel = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, _id, price } = treatment;
    const date = format(selectedDate, 'PP');

    const handelBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const pname = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const booking = {
            appoinmentDate: date,
            treatmentName: name,
            patientName: pname,
            slot,
            email,
            number,
            treatmentId: _id,
            price
        }
        fetch('https://doctors-portal-server-ten-alpha.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })
    };

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id='booking-modal' className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor='booking-modal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-black">{name}</h3>
                    <form onSubmit={handelBooking} className="card-body lg:w-full flex mx-auto">
                        <input disabled type="text" name="subject" value={date} className="input input-bordered" />
                        <select name='slot' className="select select-bordered w-full ">
                            <option disabled selected>Selectes time</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Type your name" className="input input-bordered" />
                        <input type="text" defaultValue={user?.email} disabled name="email" placeholder="Type your email" className="input input-bordered" />
                        <input type="text" name="number" placeholder="Type your number " className="input input-bordered" />
                        <input type="submit" value='submit' className="btn btn-accent " />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModel
