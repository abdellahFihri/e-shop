import React from 'react';
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import './cart-icon.scss';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

const CartIcon=({toggleCartHidden,itemCount})=>(
    <div  className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag  className="shopping-icon"/>
<span className="item-count">{itemCount}</span>
    </div>
)
const  mapDispatchToProps = (dispatch) => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps =createStructuredSelector({//passing the wohle state as argument to the selector
   itemCount:selectCartItemsCount//state to this selector so it can select the piece of state it needs to update
})

  

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon)

