import Lottie from 'lottie-react'
import watch from '../../assets/watch.json'
import location from '../../assets/location.json'
import phone from '../../assets/Phone.json'
import React from 'react'

const BannerItems = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 '>
            <div className='lg:flex gap-5 items-center	bg-primary p-10 rounded-lg shadow-xl'>
                <div className='w-20'>
                    <Lottie animationData={watch} loop={true} />
                </div>
                <div>
                    <div className='mb-3'>
                        <p className='text-xl font-bold'>Opening Hours</p>
                    </div>
                    <p className='font-bold'>Morning 9AM to Evening 6PM</p>
                </div>
            </div>
            <div className='lg:flex gap-5 items-center	bg-accent p-10 rounded-lg shadow-xl'>
                <div className='w-24 text-white'>
                    <Lottie animationData={location} loop={true} />
                </div>
                <div>
                    <div className='mb-3 text-white'>
                        <p className='text-xl font-bold'>Our Location</p>
                    </div>
                    <p className='text-white font-bold'>Dashmina Hospital Road</p>
                </div>
            </div>
            <div className='lg:flex  gap-5 items-center	bg-primary p-10 rounded-lg shadow-xl'>
                <div className='w-40'>
                    <Lottie animationData={phone} loop={true} />
                </div>
                <div>
                    <div className='mb-3'>
                        <p className='text-xl font-bold sm:text-center'>Our Phone Service </p>
                    </div>
                    <p className='font-bold'>Number: 01676485383</p>
                    <p className='font-bold'>Number: 01796317667</p>
                </div>
            </div>
        </div>
    )
}

export default BannerItems
