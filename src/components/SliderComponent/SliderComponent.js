import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../assets/images/demo/image 8 (1).png";
import "../SliderComponent/SliderComponent.css";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 600,
  };
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div id="slider-banner-image" className="slider-banner-image">
        <Slider {...settings}>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Programing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Technology</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Cooking</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Health And Care</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
          <div className="slider-info">
            <div className="slider-image">
              <img src={Image} alt="" />
            </div>
            <div className="slider-content">
              <h2>Photography</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                nibh netus auctor consect massa. Maecen vivamus sed nibh enim
                sed. Hac ridiculus tellus urna quam odio quis montes, diam.
                Malesuada ut urna eu faucibus faucibus faucibusu
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
