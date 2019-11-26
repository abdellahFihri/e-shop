import React from 'react';
import './custom-button.style.scss'

const CustomButton=({children,isGoogleSignIn,...otherProps})=>(
    <button className={`${isGoogleSignIn?'google-sign-in ':''}custom-button`} {...otherProps}>
        {children}

     {/* {   console.log( 'googlesignin ',isGoogleSignIn)} */}
    </button>
)
export default CustomButton