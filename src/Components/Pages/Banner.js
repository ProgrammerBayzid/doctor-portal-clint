import React from 'react'
import bannerImg from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import Button from '../../assets/Button/Button'

const Banner = () => {
    return (
        <div>
            <div>
                <img className='hidden lg:block lg:absolute w-2/3 ' src={bgImg} alt="" srcset="" />
                <div className="hero  " >

                    <div className="hero-content flex-col lg:flex-row-reverse lg:mt-40 ">
                        <img src={bannerImg} className="rounded-lg lg:w-1/2 shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Doctors Portals</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Button>Get Stared</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Banner
