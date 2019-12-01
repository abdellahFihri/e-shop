import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './cart.dropdown.style.scss'

const Cart=()=>(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>CHECK OUT</CustomButton>
    </div>
)
export default Cart