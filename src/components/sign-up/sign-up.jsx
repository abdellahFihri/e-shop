import React,{Component} from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./sign-up.style.scss";

class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleSubmit=async event=>{
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password!==confirmPassword){
alert('Password confirmation failed')//in case passwords are not matching  return n do nothing
return;
    }
    try{
const {user}=await auth.createUserWithEmailAndPassword(email,password)//its a firebase method
await createUserProfileDocument(user,{displayName})
this.setState({ displayName: "", email: "", password: "", confirmPassword: ""})//this will clear the form
    } catch(error){
        console.log(error)

    }
}
handleChange=event=>{
    const {name,value}=event.target
    this.setState({[name]:value})
}

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">don't have an account?</h2>
        <span>Sign up using your email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Enter Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
