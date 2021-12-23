import React from "react";
import StripeCheckout from 'react-stripe-checkout';

class Payments extends React.Component{
    render() {
        debugger;

        return(
            <StripeCheckout
            amount={500} //amount of money charged
            token={token => console.log(token)}//its a callback
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        )
    }
}

export default Payments;