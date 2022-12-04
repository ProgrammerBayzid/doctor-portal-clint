import React from 'react'
import Banner from './Banner'
import BannerItems from './BannerItems'
import ContactsUs from './ContactsUs'
import DentalCare from './DentalCare'
import MakeAppoinment from './MakeAppoinment'
import Services from './Services'
import Tesmonial from './Tesmonial'

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <div className='lg:mt-80'>
                <BannerItems></BannerItems>
            </div>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Tesmonial></Tesmonial>
            <ContactsUs></ContactsUs>


        </div>
    )
}

export default Home
