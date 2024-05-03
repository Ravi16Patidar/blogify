import { Fragment } from "react";
import './Signup.css'

export default function Signup() {
    return (
        <Fragment>
            <div className="signup-container">
                <h2 className="signup-title">Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter your full name" className="input-field"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" placeholder="Enter your email" className="input-field"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" className="input-field"/>
                </div>
                <button className="btn">Sign Up</button>
                <a href="#" className="link">Already have an account? Log in</a>
            </div>
        </Fragment>
    )
} 
