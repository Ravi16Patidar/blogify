import { Fragment } from "react";
import './Login.css'
import { Link } from "react-router-dom";

export default function Widget() {
    return (
        <Fragment>
            <div className="login-container">
                <h2 className="login-title">Log in</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" className="input-field"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" className="input-field"/>
                </div>
                <button className="btn">Log in</button>
                <a href="#" className="link forgot-password">Forgot your password?</a>
                <Link to="/" className="link">Don't have an account? Register</Link>

            </div>
        </Fragment>
    )
} 
