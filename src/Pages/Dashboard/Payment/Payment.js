import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JvkskImOPsEWzuD1Q4XF5853sdJ9Pe5oEzZhULX5SN4RKpuMMuEcFVRzbg3pVMwxjPP3g6DuTpnQYkuWxEPfgB800c7yfxLd7');
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        fetch(`https://lit-forest-68710.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
            <h2>Please pay for :{appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay : ${appointment.price}</h4>

            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;