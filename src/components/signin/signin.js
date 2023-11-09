import React, { useState } from "react";
import "./signin.css";
import googleLogo from "../../assets/images/demo/google.png";
import facebookLogo from "../../assets/images/demo/Group 52.png";
import appleLogo from "../../assets/images/demo/Group 51.png";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { PortalService } from "../../lib/service/admin-service";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signin() {
  const navigation = useNavigate();
  const [error, setError] = useState({ email: null, password: null });
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const validation = () => {
    let errorData = {
      email: null,
      password: null,
    };
    if (!email || email.trim() === "") {
      errorData = {
        ...errorData,
        email: "Please enter username",
      };
    } else {
      errorData = {
        ...errorData,
        email: null,
      };
    }
    if (!password || password.trim() === "") {
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
    if (errorData.email || errorData.password) {
      toast.error("Please fix the following errors:");
      if (errorData.email) {
        toast.error(errorData.email);
      }
      if (errorData.password) {
        toast.error(errorData.password);
      }
    }
    setError({ ...errorData });
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    if (password.trim() === "" || email.trim() === "" || !password || !email) {
      validation();
    } else {
      setError({
        email: null,
        password: null,
      });
      const dataSubmit = {
        email: email,
        password: password,
      };
      await PortalService.getALLUser()
        .then((res) => {
          console.log(res);
          const users = res.data?.filter((user, index) => {
            if (
              user?.password === dataSubmit.password &&
              user?.email === dataSubmit.email
            ) {
              return user;
            }
          });
          if (users.length > 0) {
            const user = users[0];
            if (user.role === "ADMIN") {
              localStorage.setItem("users", JSON.stringify(user));
              navigation("/admin-portal");
            } else if (user.role === "STUDENT") {
              localStorage.setItem("users", JSON.stringify(user));
              navigation("/student");
            } else if (user.role === "TEACHER") {
              localStorage.setItem("users", JSON.stringify(user));
              navigation("/teacher-portal");
            } else {
              toast.error(
                "You don't have permission to access the admin portal."
              );
            }
          } else {
            toast.error("Username or password incorrect");
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <Link to="/register">
              <p className="highlight" style={{ cursor: "pointer" }}>
                Sign up
              </p>
            </Link>
          </div>
        </div>
        <div className="signin-btn d-flex">
          <div className="google">
            <img
              src={googleLogo}
              style={{ maxWidth: "30px" }}
              alt="Google Logo"
            />
            <label>Sign in with Google</label>
          </div>
          <div className="facebook">
            <img
              src={facebookLogo}
              style={{ maxWidth: "46px" }}
              alt="Facebook Logo"
            />
          </div>
          <div className="apple">
            <img
              src={appleLogo}
              style={{ maxWidth: "46px" }}
              alt="Apple Logo"
            />
          </div>
        </div>
        <div className="signin-info">
          <form onSubmit={OnSubmit}>
            <label className="my-2">Enter your username or email address</label>
            <br />
            <Form.Control
              id="email"
              type="text"
              maxLength={255}
              placeholder="Username or email address"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="my-2">Enter your password</label>
            <br />
            <Form.Control
              id="password"
              type="password"
              maxLength={255}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="my-2">Forgot Password</label>
            <br />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
