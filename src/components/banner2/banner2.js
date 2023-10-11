import React from "react";
import image3 from "../../assets/images/demo/image 3.png";
import frame6541 from "../../assets/images/demo/Frame 6541.png";
import frame6542 from "../../assets/images/demo/Frame 6542.png";
import frame6544 from "../../assets/images/demo/Frame 6544.png";
import frame6543 from "../../assets/images/demo/Frame 6543.png";
import "./banner2.css";
export default function Banner2() {
  return (
    <>
      <div className="banner2 container">
        <h3>We Bring The Good Education To Life</h3>
        <div className="row banner2-info">
          <div className="col-md-4 banner2-image">
            <img src={image3} alt="" />
          </div>
          <div className="col-md-7 banner2-content">
            <h1>Let Your Education Do The Walking</h1>
            <div className="banner2-detailInfo">
              <img src={frame6541} alt="" />
              <span>Free E-book, Videos and kits</span>
            </div>
            <div className="banner2-detailInfo">
              <img src={frame6542} alt="" />
              <span>Learn at your own pace</span>
            </div>
            <div className="banner2-detailInfo">
              <img src={frame6544} alt="" />
              <span>Collaborate with different learners around the globe</span>
            </div>
            <div className="banner2-detailInfo">
              <img src={frame6543} alt="" />
              <span>Top instructors around the globe</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
