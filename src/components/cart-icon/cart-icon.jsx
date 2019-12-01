import React from 'react';
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-icon.scss';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

const CartIcon=({toggleCartHidden})=>(
    <div  className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag  className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)
const  mapDispatchToProps = (dispatch) => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

  

export default connect(null,mapDispatchToProps) (CartIcon)

