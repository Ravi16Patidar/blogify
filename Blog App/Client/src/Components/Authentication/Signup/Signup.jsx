import { Fragment,useState } from "react";
import './Signup.css'
import { Link,useNavigate  } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate ();
    const [signupFormData,setSignupFormData]=useState({
        fullname:'',
        email:'',
        password:''
    })
    const handleInput=(e)=>{
        setSignupFormData({...signupFormData,[e.target.name]:e.target.value})
    }
    const handleSubmit=async()=>{
       try{
        const res=await axios.post('http://localhost:4200/api/signup',signupFormData)
        alert("Form Submitted Successfully");
        setSignupFormData({
            fullname:'',
            email:'',
            password:''
        })
        console.log(res.data.status===201)
        {
            navigate('/dashboard')
        }
       }catch(err){
        if(err?.response?.data?.error?.code ===11000)
            {
                alert("The email the already exist")
            }
       }
    }
    return (
        <Fragment>
            <div className="signup-main-container">
            <div className="signup-container">
                <h2 className="signup-title">Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter your full name" className="input-field" name="fullname" value={signupFormData.fullname} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" value={signupFormData.email} id="email" placeholder="Enter your email" className="input-field" onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={signupFormData.password} id="password" placeholder="Enter your password" className="input-field" onChange={handleInput}/>
                </div>
                <button className="btn" onClick={handleSubmit}>Sign Up</button>
                <Link to="/login" className="link">Already have an account? Log in</Link>

            </div>
            </div>
        </Fragment>
    )
} 
