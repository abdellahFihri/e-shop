import React from 'react';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button'
import './cart.dropdown.style.scss'

const Cart=({cartItems})=>(//distruturing cartItems
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.map(cartItem=>(
               <CartItem key={cartItem.id} item={cartItem}/>//mapping in cartItems to display eachone in <CartItem/>
               ))
           } 
        </div>
        <CustomButton>CHECK OUT</CustomButton>
    </div>
)
const mapStateToProps = (state) => {//distructuring what we need from state
    return {
       cartItems:selectCartItems(state)
    }
}
export default connect(mapStateToProps) (Cart)//connecting to store