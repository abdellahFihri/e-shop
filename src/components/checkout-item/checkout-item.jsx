/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {connect} from 'react-redux'
import {clearItemFromCart,addItem,removeItem} from '../../redux/cart/cart.action'
import './checkout-item.style.scss'

const CheckOutItem=({cartItem,clearItem,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
<span className="name">{name}</span>
<span className="quantity">
    <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow"  onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span>
<span className="price">{price}</span>
        <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10060;</div> {/* onclick calls clearItem from displatch n cartItem as argument */}
    </div>
    )
    }
const mapDispatchToProps = (dispatch) => ({
    
        clearItem: (item) =>  dispatch(clearItemFromCart(item)),//calls the action n gives selected item as arguments
            
         addItem:(item)=>dispatch(addItem(item)),

         removeItem:(item)=>dispatch(removeItem(item))
        
    
})
export default connect (null,mapDispatchToProps)(CheckOutItem)