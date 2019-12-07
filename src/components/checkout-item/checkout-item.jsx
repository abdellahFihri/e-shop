/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './checkout-item.style.scss'

const CheckOutItem=({cartItem:{name,imageUrl,price,quantity}})=>(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
<span className="name">{name}</span>
<span className="quantity">{quantity}</span>
<span className="price">{price}</span>
        <div className="remove-button">&#10060;</div>
    </div>
)
export default CheckOutItem