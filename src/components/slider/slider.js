import React from "react";
import SliderComponent from "../SliderComponent/SliderComponent";
import "../slider/slider.css";

export default function Slider() {
  return (
    <div className="container">
      <div className="slider-title">
        <div className="slider-title-content">
          <h3>Choose favourite course from top cartegories</h3>
        </div>
        <div className="slider-title-more">
          <h5 style={{ fontWeight: "400", marginTop: "8px" }}>See all</h5>
        </div>
      </div>
      <div className="slider-slick">
        <SliderComponent></SliderComponent>
      </div>
    </div>
  );
}
