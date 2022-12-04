import React from 'react'
import { Link } from 'react-router-dom'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../../assets/Button/Button'

const MakeAppoinment = () => {
    return (
        <div>
            <section
                className='mt-24'
                style={{
                    background: `url(${appointment})`
                }}
            >

                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={doctor} className="-mt-36 hidden lg:block lg:w-1/2" />
                        <div>
                            <p className='font-bold mb-3 text-white'>Appoinment</p>
                            <h1 className="text-5xl font-bold text-white">Make an Appoinment Today</h1>
                            <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Button>Appoinment</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MakeAppoinment
