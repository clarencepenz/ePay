import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51H2LTBAOBUT8i9e4zFsXKeU1ksBAjZAfnxX96aT8O4NteVR22nYjuhTbCiSkgboC1MWzUTVYOR7A9KBTMEZ0OrKm0090irEjbB");

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe
