import "./review.css";
import SliderComponent1 from "../SliderComponent1/SliderComponent1";

import React from "react";

export default function Review() {
  return (
    <div className="container" id="review">
      <div className="review">
        <h2 style={{ textAlign: "center" }}>Reviews</h2>
        <div className="row">
          <div className="col-md-4 ">
            <div className="review-content">
              <h1>
                What Our <span className="highlight">Student</span> Say About Us
              </h1>
            </div>
          </div>
          <div className="col-md-8">
            <SliderComponent1 />
          </div>
        </div>
      </div>
    </div>
  );
}
