import React from "react";
import "./signup.css";
import { useState, useEffect } from "react";

export default function SignUp() {
  const initialValues = { email: "", username: "", phone: "", password: "" };
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
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  return (
    <div className="signUp" id="signUp">
      <div className="background">
        <img
          src="https://accgroup.vn/wp-content/uploads/2023/02/Background-la-gi.jpg.webp"
          alt="Background"
        />
      </div>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <div className="signUp-form">
        <div className="signUp-title">
          <div className="signUp-logo">
            <p>
              Welcome to <span className="highlight">Lorem</span>
            </p>
            <h3>SIGN UP</h3>
          </div>
          <div className="signUp-logo-info">
            <p>No account?</p>
            <p className="highlight">Sign in</p>
          </div>
        </div>
        <div className="signUp-info">
          <form onSubmit={handleSubmit}>
            <label>Enter your username</label>
            <br />
            <input
              type="text"
              name="username"
              className="signUp-info"
              placeholder="Enter username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="errors">{formErrors.username}</p>
            <br />
            <div className="userInfo">
              <div className="email">
                <label>Email </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="errors">{formErrors.email}</p>
              </div>
              <div className="phone">
                <label>Contact number</label>
                <br />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <p className="errors">{formErrors.phone}</p>
              </div>
            </div>
            <br />
            <label> Enter your password</label>
            <br />
            <input
              type="password"
              name="password"
              className="signUp-info"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="errors">{formErrors.password}</p>
            <br />
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
