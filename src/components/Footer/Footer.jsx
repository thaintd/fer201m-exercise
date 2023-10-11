import React from "react";
import "./style.css";
import IMG from "../../assets/images/demo/Frame 6555.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="text-wrapper">WiSchool</div>
      <p className="we-are-not-here-to">
        we are not here to sell you products, we sell value through our
        expertise.
      </p>
      <div className="footerr">
        <div className="div-wrapper">
          <div className="div">Home</div>
        </div>
        <div className="frame-2">
          <div className="div">Services</div>
        </div>
        <div className="frame-3">
          <div className="div">Training</div>
        </div>
        <div className="frame-3">
          <div className="div">Resources</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-2">About Us</div>
        </div>
      </div>
      <div className="frame-4">
        <div className="div-wrapper">
          <div className="div">Sme</div>
        </div>
        <div className="frame-2">
          <div className="div">Solution</div>
        </div>
        <div className="frame-3">
          <div className="div">Reviews</div>
        </div>
        <div className="frame-3">
          <div className="div">Blog</div>
        </div>
      </div>
      <div className="frame-5">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Job Opening</div>
        </div>
        <div className="frame-2">
          <div className="div">News</div>
        </div>
        <div className="frame-3">
          <div className="div">Research</div>
        </div>
      </div>
      <div className="frame-6">
        <div className="frame-3">
          <div className="div">Contact Us</div>
        </div>
        <div className="frame-3">
          <div className="div">Place A Call</div>
        </div>
        <div className="frame-7">
          <div className="text-wrapper-3">Email</div>
          <div className="overlap-group">
            <div className="text">{""}</div>
            <div className="text-wrapper-4">Wischool@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="frame-8">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Uk Privacy Policy</div>
        </div>
        <div className="frame-2">
          <div className="div">Terms Of Use</div>
        </div>
      </div>
      <img className="img" alt="Frame" src={IMG} />
      <div className="group">
        <p className="p">Subscribe to get latest updates</p>
        &nsbp;
        <div className="sub-box">
          <div className="text-wrapper-5">Your Email address</div>
          <div className="overlap-group-2">
            <div className="rectangle">
              <div className="text-wrapper-7">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
