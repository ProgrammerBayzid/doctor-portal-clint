import React from 'react'
import Button from '../../assets/Button/Button'
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    const cards = [
        {
            id: 1,
            title: 'Exceptional Dental Care, on Your Terms',
            description: 'Dantal is a leading manufacturer of customized Hydraulic Cylinders and Hydraulic Systems, Aircraft Hydraulic Service Trolleys and Car Parking Solutions in India. Dantal offers complete Hydraulic solutions to sectors like agriculture, earth moving equipements, waste management, material handling, mining, industrial applications, heavy equipments, renewable energy sector and defense.',
            img: treatment

        }
    ]
    return (
        <div className='mt-24'>

            {
                cards.map(card =>

                    <div className="hero  ">
                        <div className="hero-content flex-col lg:flex-row lg:gap-40">
                            <div>
                                <img src={card.img} className="max-w-sm rounded-lg shadow-2xl" />
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold">{card.title}</h1>
                                <p className="py-6">{card.description}</p>
                                <Button>Get Stared</Button>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default DentalCare
