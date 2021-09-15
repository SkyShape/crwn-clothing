import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51JZsJ1DYqxAYkpD7rKC7ZV4QvgxU5VijNJXJPFdRiMHVvFSwBV0dtQLgilBAbTkMixZEPMsZWCdCiUOsxJnbUMTW00iAYHDRGz';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        < StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/aAW.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeButton;