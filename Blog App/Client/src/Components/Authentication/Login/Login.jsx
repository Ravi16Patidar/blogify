import { Fragment, useState } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Widget() {
    const navigate=useNavigate()
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4200/api/login",
        loginFormData
      );
      console.log(res.data);
      const token = JSON.stringify(res.data.token);
      localStorage.setItem("userToken", token);
      if(res.data.status===200){
        navigate('/dashboard')
      }
    } catch (err) {
      if (err?.response?.data?.status === 400) {
        if (err?.response?.data?.msg === "password incorrect") {
          alert("Password is incorrect");
        } else if (err?.response?.data?.msg === "User not found") {
          alert("User not found");
        }
      } else {
        console.log(err);
      }
    }
  };
  return (
    <Fragment>
         <div className="login-main-container">
      <div className="login-container">
        <h2 className="login-title">Log in</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={loginFormData.email}
            id="email"
            placeholder="Enter your email"
            className="input-field"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={loginFormData.password}
            id="password"
            placeholder="Enter your password"
            className="input-field"
            onChange={handleInput}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Log in
        </button>
        <a href="#" className="link forgot-password">
          Forgot your password?
        </a>
        <Link to="/signup" className="link">
          Don't have an account? Register
        </Link>
      </div>
      </div>
    </Fragment>
  );
}
