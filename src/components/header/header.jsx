import React from 'react';
import CartIcon from '../cart-icon/cart-icon'
import Cart from '../cart/cart.dropdown'
import {connect} from 'react-redux' //connects component to redux
import {Link} from 'react-router-dom'
import './header.style.scss';
import {auth} from '../../firebase/firebase'
import  {ReactComponent as Logo} from '../../assets/crown.svg'//import svg as a component
import userReducer from '../../redux/user/user.reducer';

const Header=({currentUser,hidden})=>(
    <div className="header">
<Link className="logo-container" to="/">
    <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to ='/shop'>
          SHOP
          </Link>  
          <Link className="option" to ='/shop'>
          CONTACT
          </Link> 
          {
              currentUser?
              <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
              :
              <Link className="option" to ='/signin'>SIGN IN</Link>
          }
<CartIcon/>
    </div>
    {
        hidden? null://conditinal rendrering  that gets a boolean from state
    <Cart/>
    }
    </div>
)
 const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({//advanced distructuring
    currentUser:currentUser,
   hidden:hidden
})
export default connect(mapStateToProps)(Header)