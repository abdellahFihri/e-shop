import React from 'react';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'//to juspt to an other page on click of a button without using Link
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart.dropdown.style.scss'

const Cart=({cartItems,history,dispatch})=>(//distruturing cartItems
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.length?
               cartItems.map(cartItem=>(
                   <CartItem key={cartItem.id} item={cartItem}/>//mapping in cartItems to display eachone in <CartItem/>
                   
                   ))
                   :
                   <span className="empty-message">Your cart is empty</span>
                } 
               
        </div>
               {
               cartItems.length?
            
               <CustomButton onClick={()=>{history.push('/checkout');
               dispatch(toggleCartHidden())}}>CHECK OUT </CustomButton>//pushes to the history of link the path we want n we wrap the connect function with the imported withRouter
                :  null
        
             }
            
          
       
    
    </div>
)
const mapStateToProps =createStructuredSelector ({//distructuring what we need from state
    
       cartItems:selectCartItems
    
})
export default  withRouter(connect(mapStateToProps) (Cart))//connecting to store wrapping the connect func with withRouter