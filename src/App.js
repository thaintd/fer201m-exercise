import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/button/Button";
import Banner from "./components/banner/banner";
import CallUs from "./components/CallUs/footer";
import Card from "./components/carrd/Card";
import Banner2 from "./components/banner2/banner2";
import Signin from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import Counter from "./components/Counter";
import store from "./shared/store";
import { Provider } from "react-redux";
import Slider from "./components/slider/slider";
import Instructor from "./components/Instructors/instructor";
import vetor from "../src/assets/images/demo/Vector.png";
import Review from "./components/Reviews/review";
import Navbar from "./components/navbar/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Frame from "./components/Frame/Frame";
import CardL from "./components/CardL/CardL";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner></Banner>
      <Frame />
      <Slider />
      <div className="container" id="card-info">
        <div className="card-info">
          <div className="card-info-content ">
            <h3>Most Popular courses</h3>
          </div>
          <div className="card-info-btn">
            <button>
              <img src={vetor} alt="" />
              Sort by
            </button>
          </div>
        </div>
        <div className="row ">
          <div className=" col-md-4 ">
            <div className="cardCss">
              <Card />
            </div>
          </div>
          <div className=" col-md-4 ">
            <div className="cardCss">
              <Card />
            </div>
          </div>
          <div className=" col-md-4 ">
            <div className="cardCss">
              <Card />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className=" col-md-4 ">
            <div className="cardCss">
              <Card />
            </div>
          </div>
          <div className=" col-md-4 ">
            <div className="cardCss">
              <Card />
            </div>
          </div>
          <div className=" col-md-4 ">
            <div className="cardCss">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <CardL></CardL>
      <Banner2></Banner2>
      <Review />
      <Instructor />
      <CallUs></CallUs>
      <Footer />
    </div>
    /* <Signin></Signin> */
    // <Provider store={store}>
    //   <Counter></Counter>
    // </Provider>
  );
}

export default App;
