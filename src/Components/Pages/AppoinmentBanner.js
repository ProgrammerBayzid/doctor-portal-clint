import React, { useState } from 'react'
import bannerImg from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
    // if () {

    // }
    return (
        <div>
            <div className='gap-6'>
                <img className='hidden lg:block lg:absolute w-2/3 ' src={bgImg} alt="" srcset="" />
                <div className="hero  " >

                    <div className="hero-content flex-col lg:flex-row-reverse lg:mt-40 ">
                        <img src={bannerImg} className="rounded-lg lg:w-1/2 shadow-2xl" />
                        <div className='lg:mr-24'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            >
                            </DayPicker>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppoinmentBanner
