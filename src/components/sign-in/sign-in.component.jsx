import React,{Component} from 'react';
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle} from '../../firebase/firebase'//import from firebase.js n call it in  button
import './sign-in.style.scss'

class SignIN extends Component {
  constructor(props){
      super(props)
      this.state={
          email:'',
          password:''
      }
  }
  handleSubmit=event=>{
      event.preventDefault()
      this.setState({email:'',password:''})
  }
  handleChange=event=>{
     const{value,name} =event.target //this pulls value and name from the event target in this case the input
     this.setState({[name]:value})//will dynamially change the  name of the property 
  }

    render() { 
        return (
            <div className="sign-in">
                <h2>Do you have an account already?</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="email"
                    required/>
                    

                    <FormInput name="password"
                     type="password" 
                     value={this.state.email} 
                     handleChange={this.handleChange} 
                     label="password"
                     required/>
                   
                     <div className="buttons">
                    <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                        </CustomButton>
                        </div>
                </form>
            </div>
          );
    }
}
 
export default SignIN;