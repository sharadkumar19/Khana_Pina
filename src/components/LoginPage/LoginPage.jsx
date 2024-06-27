import React, { useState } from 'react'
import "./LoginPage.css"
import { assets } from '../../assets/assets'
import GoogleAccess from '../GoogleAccess/GoogleAccess'
const LoginPage = ({ setshowlogin }) => {

    const [currentstate, setcurrentstate] = useState("Login")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentstate === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />

                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>By accepting, I agree to the terms and condition</p>
                    </div>

                    <button>{currentstate === "Sign Up" ? "Create Account" : "Login"}</button>
                </div>

                {currentstate === "Login" ?
                    <p>Create a New Account? <span onClick={() => setcurrentstate("Sign Up")}>click here</span></p> :
                    <p>Already have an Account? <span onClick={() => setcurrentstate("Login")}>Login here</span></p>}
                <div className='access'>

                    <GoogleAccess/>
                </div>


            </form>
        </div>
    )
}

export default LoginPage
