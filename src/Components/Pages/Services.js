import React from 'react'
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import ServiceCard from './ServiceCard'


const Services = () => {

    const cards = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            discription: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img: whitening

        },
        {
            id: 2,
            name: 'Cavity Filling',
            discription: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img: cavity

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            discription: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img: fluoride
        },
    ]

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold'>Our Services</h3>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-10' >
                {
                    cards.map(card =>
                        <ServiceCard
                            key={card.id}
                            card={card}
                        ></ServiceCard>)
                }
            </div>
        </div>
    )
}

export default Services
