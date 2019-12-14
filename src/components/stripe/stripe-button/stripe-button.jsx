import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{//recieves price as prop  from chekout component where its rendered
    const priceForStripe=price*100;//stripe requires prices to be in cents 
    const publishableKey='pk_test_2H6lQSl6x9BCKA5iq0zwIYTF00NZsfsYGb';
const onToken=token=>{
    console.log('token ',token)
    alert('payment successful')
}
    return(
        <StripeCheckout
        label="Pay Now"
        // currency="EUR"
        name="FIHRI E-SHOP Ltd"
        currency="EUR" 
        billingAddress//allows field to fill in
        shippingAddress
        image='https://raw.githubusercontent.com/abdellahFihri/portfolio/master/src/img/favicon.png'
        description={`Total : €${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        alipay // accept Alipay (default false)
        bitcoin // accept Bitcoins (default false)
        allowRememberMe // "Remember Me" option (default true)
        />
    )
}
 export default StripeCheckoutButton