import React from "react";
import "./signin.css";
import googleLogo from "../../assets/images/demo/google.png";
import facebookLogo from "../../assets/images/demo/Group 52.png";
import appleLogo from "../../assets/images/demo/Group 51.png";
import { useState, useRef } from "react";
import { adminPortalService } from "../../lib/admin-service";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

export default function Signin1() {
  //   const initialValues = { username: "", password: "" };
  //   const [formValues, setFormValues] = useState(initialValues);
  //   const [formErrors, setFormErrors] = useState({});
  //   const [isSubmit, setIsSubmit] = useState(false);
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormValues({ ...formValues, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setFormErrors(validate(formValues));
  //     setIsSubmit(true);

  // adminPortalService

  //   };
  //   useEffect(() => {
  //     console.log(formErrors);
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //       console.log(formValues);
  //     }
  //   });
  //   const validate = (values) => {
  //     const errors = {};
  //     if (!values.username) {
  //       errors.username = "Username is required!";
  //     }
  //     if (!values.password) {
  //       errors.password = "Password is required!";
  //     }
  //     return errors;
  //   };
  const [error, setError] = useState({ username: null, password: null });
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigation = useNavigate();

  const onValidationsForm = () => {
    let errorData = {
      username: null,
      password: null,
    };
    if (
      !usernameRef?.current?.value ||
      usernameRef?.current?.value.trim() === ""
    ) {
      errorData = {
        ...errorData,
        username: "Please enter username",
      };
    } else {
      errorData = {
        ...errorData,
        username: null,
      };
    }
    if (
      !passwordRef?.current?.value ||
      !passwordRef?.current?.value.trim() === ""
    ) {
      errorData = {
        ...errorData,
        password: "Please enter password",
      };
    } else {
      errorData = {
        ...errorData,
        password: null,
      };
    }
    setError({ ...errorData });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      usernameRef?.current?.value.trim() === "" ||
      passwordRef?.current?.value.trim() === "" ||
      !passwordRef?.current?.value ||
      !usernameRef?.current?.value
    ) {
      onValidationsForm();
    } else {
      setError({
        username: null,
        password: null,
      });
      const dataSubmit = {
        username: usernameRef?.current?.value,
        password: passwordRef?.current?.value,
      };

      adminPortalService
        .login()
        .then((res) => {
          console.log(res);
          const users = res.data?.filter((user, index) => {
            if (
              user?.password === dataSubmit.password &&
              user?.username === dataSubmit.username
            ) {
              return user;
            }
          });
          if (users.length > 0) {
            localStorage.setItem("users", JSON.stringify(users[0]));
            navigation("/teacher-portal");
          } else {
            notification.error({ message: "Username or password is wrong" });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(dataSubmit);
      return dataSubmit;
    }
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
            <a href="/">Sign in with Google</a>
          </div>
          <div className="facebook">
            <img src={facebookLogo} alt="Facebook Logo" />
          </div>
          <div className="apple">
            <img src={appleLogo} alt="Apple Logo" />
          </div>
        </div>
        <div className="signin-info">
          {/* onSubmit={handleSubmit} */}
          <form onSubmit={onSubmit}>
            <label>Enter your username or email address</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              ref={usernameRef}
              // onChange={handleChange}
            />
            {error?.username && error?.username}
            <label> Enter your password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
              // onChange={handleChange}
            />
            {error?.password && error?.password}
            <a href="/">Forgot Password</a>
            <br />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
}
