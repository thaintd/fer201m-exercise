import React from "react";
import "./signin.css";
import googleLogo from "../../assets/images/demo/google.png";
import facebookLogo from "../../assets/images/demo/Group 52.png";
import appleLogo from "../../assets/images/demo/Group 51.png";
import { useState, useEffect } from "react";
export default function Signin() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  return (
    <div className="signin" id="signin">
      <div className="background">
        <img
          src="https://accgroup.vn/wp-content/uploads/2023/02/Background-la-gi.jpg.webp"
          alt="Background"
        />
      </div>
      <div className="signin-form">
        <div className="signin-title">
          <div className="signin-logo">
            <p>
              Welcome to <span className="highlight">Lorem</span>
            </p>
            <h3>SIGN IN</h3>
          </div>
          <div className="signin-logo-info">
            <p>No account?</p>
            <p className="highlight">Sign up</p>
          </div>
        </div>
        <div className="signin-btn">
          <div className="google">
            <img src={googleLogo} alt="Google Logo" />
            <a href="">Sign in with Google</a>
          </div>
          <div className="facebook">
            <img src={facebookLogo} alt="Facebook Logo" />
          </div>
          <div className="apple">
            <img src={appleLogo} alt="Apple Logo" />
          </div>
        </div>
        <div className="signin-info">
          <form onSubmit={handleSubmit}>
            <label>Enter your username or email address</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.username}</p>
            <label> Enter your password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <p className="errors">{formErrors.password}</p>
            <a href="">Forgot Password</a>
            <br />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
