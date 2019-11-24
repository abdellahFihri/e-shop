import React from 'react';
import {Route,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header'
import SignIn_SignUp from './pages/signin-signup/signin-signup'
import {auth} from  './firebase/firebase'
import './App.css';


class App extends React.Component{
constructor(){
  super();
    this.state={
      currentUser:null
    }  
}

unsubscribeFromAuth=null

componentDidMount() {
 this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{this.setState({currentUser:user});console.log(user)}) // access to user porps n methods
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
  
}


  render(){
  return (//<Header/> outsde of the switch to be always diplayed
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignIn_SignUp} />
    </Switch>
    </div>
  );
  }
}

export default App;
