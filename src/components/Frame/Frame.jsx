import React from "react";
import "./style.css";
import I1 from "../../assets/images/img/1.svg";
import I2 from "../../assets/images/img/2.svg";
import I3 from "../../assets/images/img/3.svg";
import I4 from "../../assets/images/img/4.svg";
import IC1 from "../../assets/images/img/Icon1.png";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <img className="img" alt="Frame" src={I1} />
        <div className="text-wrapper">Problem Solving</div>
      </div>
      <div className="div-2">
        <div className="akar-icons-chat-dots-wrapper">
          <img
            className="akar-icons-chat-dots"
            alt="Akar icons chat dots"
            src={IC1}
          />
        </div>
        <div className="text-wrapper">Live chat</div>
      </div>
      <div className="div-3">
        <img className="img" alt="Frame" src={I2} />
        <div className="text-wrapper">Group Reading</div>
      </div>
      <div className="div-3">
        <img className="img" alt="Frame" src={I3} />
        <div className="text-wrapper">10k Courses</div>
      </div>
      <div className="div-4">
        <img className="img" alt="Frame" src={I4} />
        <div className="text-wrapper">Hand-on activities</div>
      </div>
    </div>
  );
};

export default Frame;
