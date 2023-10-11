import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../assets/images/demo/image 8 (1).png";
import "../SliderComponent1/SliderComponent1.css";
import avatar1 from "../../assets/images/demo/unsplash_3JmfENcL24M.png";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 600,
  };
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div id="slider-review" className="slider-review">
        <Slider {...settings}>
          <div className="ins-info">
            <div className="ins-content">
              <img src={avatar1} alt="" />
              <div className="ins-name">John Mark</div>
              <div className="ins-role">Senior Developer</div>
              <div className="ins-des">
                “Education will be for you what you want it to be”{" "}
              </div>
            </div>
          </div>
          <div className="ins-info">
            <div className="ins-content">
              <img src={avatar1} alt="" />
              <div className="ins-name">John Mark</div>
              <div className="ins-role">Senior Developer</div>
              <div className="ins-des">
                “Education will be for you what you want it to be”{" "}
              </div>
            </div>
          </div>
          <div className="ins-info">
            <div className="ins-content">
              <img src={avatar1} alt="" />
              <div className="ins-name">John Mark</div>
              <div className="ins-role">Senior Developer</div>
              <div className="ins-des">
                “Education will be for you what you want it to be”{" "}
              </div>
            </div>
          </div>
          <div className="ins-info">
            <div className="ins-content">
              <img src={avatar1} alt="" />
              <div className="ins-name">John Mark</div>
              <div className="ins-role">Senior Developer</div>
              <div className="ins-des">
                “Education will be for you what you want it to be”{" "}
              </div>
            </div>
          </div>
          <div className="ins-info">
            <div className="ins-content">
              <img src={avatar1} alt="" />
              <div className="ins-name">John Mark</div>
              <div className="ins-role">Senior Developer</div>
              <div className="ins-des">
                “Education will be for you what you want it to be”{" "}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
