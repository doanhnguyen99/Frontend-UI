import React from 'react';
import './Login.css'

const Login = () => {
    return(
        <div className="login-component" style={{marginTop: "30px"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                        <p className="title-login">Login</p>
                        <div className="line-item"></div>
                        <p className="title-content">Welcome back! Sign in to your account</p>
                        <span className="style-input-span">Email Address*</span><br/>
                        <input type="email" className=" input-custom" required /> <br/>
                        <span className="style-input-span">Password*</span><br/>
                        <input type="password" className="input-custom" required/><br/>
                        <input type="submit" value="Login" className="submit-form"/>
                    </form>
                </div>

                <div className="col-md-6">
                    <form action="">
                        <p className="title-login">Create New Account</p>
                        <div className="line-item"></div>
                        <p className="title-content">Create your own Account</p>
                        <span className="style-input-span">First Name</span><br/>
                        <input type="email" className="input-custom"/> <br/>
                        <span className="style-input-span">Last Name</span><br/>
                        <input type="email" className="input-custom"/> <br/>
                        <span className="style-input-span">Email Address*</span><br/>
                        <input type="email" className="input-custom" required/> <br/>
                        <span className="style-input-span">Password*</span><br/>
                        <input type="password" className="input-custom" required/><br/>
                        <input type="submit" value="Register" className="submit-form"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;