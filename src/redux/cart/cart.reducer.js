import CartActionType from './cart.types'
const INITIAL_STATE={
    hidden:true
}

const cartReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden  //will switch between booleans
            }
            default:
                return state
    }
}
 export default cartReducer