import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6U64G7PkQ5daFNJ5jIwvzjgdLP0ANXmUoTnVYgQHAGCqCwm2cIsy62dVJ8QbCmVLmThdXNGRVYedVJNfK7p1JN009bkUa0eS');
console.log(stripePromise);


const Payment = () => {
    const data = useLoaderData();
    const { treatmentName, appoinmentDate, patientName, slot, price, } = data;
    const navigation = useNavigation();



    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <p className='text-3xl font-bold'>Payment for {treatmentName}</p>
            <p className='text-xl '> Please pay <span className='font-bold'> ${price} </span> fore your appoiment on <span className='font-bold'> {appoinmentDate}</span> Time <span className='font-bold'>{slot}</span>.</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    )
}

export default Payment
