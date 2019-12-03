import {createSelector} from 'reselect' //npm  add reselect

const selectCart=state=>state.cart;

export const selectCartItems= createSelector([selectCart],(cart)=>cart.cartItems)//selects only a piece of state

export const selectCartItemsCount= createSelector(
    [selectCartItems],cartItems=>cartItems.reduce(
        (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)
)