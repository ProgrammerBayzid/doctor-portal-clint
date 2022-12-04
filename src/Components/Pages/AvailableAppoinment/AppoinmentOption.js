import React, { useEffect, useState } from 'react'

const AppoinmentOption = ({ appointmentOption, setTreatment }) => {
    const { slots, _id, name, price } = appointmentOption;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p className='text-primary'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className='text-primary'> {slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    <p className='text-primary'>Price: {price}</p>
                    <div className="card-actions">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white"
                            onClick={() => setTreatment(appointmentOption)}
                        >book Appoinment</label>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default AppoinmentOption
