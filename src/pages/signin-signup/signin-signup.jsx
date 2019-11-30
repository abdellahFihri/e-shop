import React from 'react';
import  SignIN from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up'
import './signin-signup.style.scss';

const SignInSignUp=()=>(
    <div className="sign-in-sign-up">
        <SignIN/>
        <SignUp/>
    </div>
)
export default SignInSignUp