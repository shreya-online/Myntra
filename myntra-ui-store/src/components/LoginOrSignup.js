import React from 'react';
import loginImage from '../assets/img/loginBanner.jpeg'

function loginOrSignup(){
    return(
        <>
            <img src={loginImage} alt='loginImage'/>
            <div>
                <h3>Login or Signup</h3>
            </div>
        </>
    )

}

export default loginOrSignup;