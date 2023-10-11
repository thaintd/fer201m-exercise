import React from "react";
import "./footer.css";
import footerBackground from "../../assets/images/demo/mountains_horizon_archipelago_120553_1440x900.jpg";
import footerImage from "../../assets/images/demo/image.png";
export default function CallUs() {
  return (
    <div id="footer" className="footer">
      <div className="footer-background">
        <img src={footerBackground} alt="" />
        <div className="footer-image">
          <img src={footerImage} alt="" />
        </div>
        <div className="footer-content">
          <h1>
            You don’t have to see the whole staircase just take the first step
          </h1>
          <h4>
            Amet in a suspendisse convallis eget, Amet in a suspendisse
            convallis egetAmet in a
          </h4>
          <button className="getStarted"> Get Started</button>
          <button className="placeACall">Place a call</button>
        </div>
      </div>
    </div>
  );
}
