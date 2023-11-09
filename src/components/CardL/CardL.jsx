import React from "react";
import i2 from "../../assets/images/demo/ci_group.png";
import i3 from "../../assets/images/demo/ant-design_star-outlined.png";
import image from "../../assets/images/demo/demo-01.png";
import "./CardL.scss";

const CardL = () => {
  return (
    <div className="easy">
      <h3>Learn a new skill in two hours</h3>
      <div className="listCard">
        <div className="card">
          <img className="frame" alt="Frame" src={image} />
          <div className="text-wrapper">30.5$</div>
          <div className="div">
            <div className="text-wrapper-2">6 weeks</div>
            <div className="frame-2">
              <img className="ci-group" alt="Ci group" src={i2} />
              <div className="text-wrapper-2">1.5k Students</div>
            </div>
          </div>
          <div className="group">
            <p className="learn-marketing-from">
              All You Need In Business Strategy
            </p>
            <div className="frame-3">
              <img className="ant-design-star" alt="Ant design star" src={i3} />
              <div className="text-wrapper-3">4.5</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="frame" alt="Frame" src={image} />
          <div className="text-wrapper">30.5$</div>
          <div className="div">
            <div className="text-wrapper-2">6 weeks</div>
            <div className="frame-2">
              <img className="ci-group" alt="Ci group" src={i2} />
              <div className="text-wrapper-2">1.5k Students</div>
            </div>
          </div>
          <div className="group">
            <p className="learn-marketing-from">
              The Amazing Hack In Figma Prototyping
            </p>
            <div className="frame-3">
              <img className="ant-design-star" alt="Ant design star" src={i3} />
              <div className="text-wrapper-3">4.5</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="frame" alt="Frame" src={image} />
          <div className="text-wrapper">30.5$</div>
          <div className="div">
            <div className="text-wrapper-2">6 weeks</div>
            <div className="frame-2">
              <img className="ci-group" alt="Ci group" src={i2} />
              <div className="text-wrapper-2">1.5k Students</div>
            </div>
          </div>
          <div className="group">
            <p className="learn-marketing-from">
              Introduction To Basic Game Developement
            </p>
            <div className="frame-3">
              <img className="ant-design-star" alt="Ant design star" src={i3} />
              <div className="text-wrapper-3">4.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardL;
