import React from "react";
import banner from "../../assets/images/demo/banner.png";
import banner01 from "../../assets/images/demo/banner01.png";
import banner02 from "../../assets/images/demo/Frame 6515.png";
import "./banner.css";
export default function Banner() {
  return (
    <>
      <div className="banner" id="banner">
        <div className=" row ">
          <div className="col-md-7 banner-title">
            <h1>
              Quality <span className="highlight">Education</span> By Any Means
              Necessary.
            </h1>
            <button className="getStarted"> Get Started</button>
          </div>
          <div className="col-md-5 ">
            <div className="banner-image">
              <div className="image-banner">
                <img src={banner} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-content">
          <p>
            Learn from best <span className="highlight">instructors</span>{" "}
            around the globe
          </p>
          <img src={banner01} alt="" style={{ marginLeft: "25px" }} />
        </div>
        <div className="banner-card">
          <img src={banner02} alt="" />
          <h5 className="highlight"> 15K</h5>
          <div>Amazing students around the globe</div>
        </div>
      </div>
    </>
  );
}
