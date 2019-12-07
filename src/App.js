import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {setCurrentUser}from './redux/user/user.action'
import {selectCurrentUser } from './redux/user/user.selector'// import selector n use in mapstate to props
import {createStructuredSelector} from 'reselect'//strucutredselector to use multi selectors
import HomePage from "./pages/homepage/homepage.component";
import CheckOutPage from './pages/check-out/check-out'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import SignInSignUp from "./pages/signin-signup/signin-signup";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null  // we dont need this constructor anymore because we use redux to get the currentUser
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          // console.log('snap in app :',Snapshot.data())//.data  will give us the data from snapshot(name,email,displayname..)
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
          }); //will create additional properties from snap.data in the currentuser in state
        
      } 
        setCurrentUser( userAuth); //always set currentuser to userAuth to prevent leaks
      
    }); // access to user porps n methods
    

  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //<Header/> outsde of the switch to be always diplayed
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/checkout' component={CheckOutPage}/>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to='./'/>):(<SignInSignUp/>)} /> {/* redirect to main page is user is signed in */}
        </Switch>
      </div>
    );
  }
}
 const mapStateToProps =createStructuredSelector ( {
 
    currentUser: selectCurrentUser
  
})
 const mapDispatchToProps = (dispatch) => ({
 setCurrentUser:user=>dispatch(setCurrentUser(user))//dispatching the object n retrieving the user from it (currentUser)
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
