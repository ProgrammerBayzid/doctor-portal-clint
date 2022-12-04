import { useQuery, refetch } from '@tanstack/react-query';
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModel from '../BookingModel/BookingModel';
import AppoinmentOption from './AppoinmentOption';
import Spinner from '../../Pages/Spinner'
const AvailableAppoinment = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-ten-alpha.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    });
    if (isLoading) {
        return <Spinner></Spinner>
    }

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-ten-alpha.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOptions(data))
    // }, [])

    return (
        <section className='lg:mt-80 '>
            <div >
                <p className='text-center text-primary font-bold text-2xl'>Available Appoinment on: {format(selectedDate, 'PP')} </p>
            </div>
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10'>
                {
                    appointmentOptions.map(appointmentOption =>
                        <AppoinmentOption
                            key={appointmentOption._id}
                            appointmentOption={appointmentOption}
                            setTreatment={setTreatment}

                        ></AppoinmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModel
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModel>}
        </section>
    )
}

export default AvailableAppoinment
