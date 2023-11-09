import React from "react";
import Card from "../carrd/Card";
import vetor from "../../assets/images/demo/Vector.png";
export default function CardComponent() {
  return (
    <div className="container" id="card-info">
      <div className="card-info">
        <div className="card-info-content ">
          <h3>Most Popular courses</h3>
        </div>
        <div className="card-info-btn">
          <button>
            <img src={vetor} alt="" />
            Sort by
          </button>
        </div>
      </div>
      <div className="row ">
        <div className=" col-md-4 ">
          <div className="cardCss">
            <Card />
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="cardCss">
            <Card />
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="cardCss">
            <Card />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className=" col-md-4 ">
          <div className="cardCss">
            <Card />
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="cardCss">
            <Card />
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="cardCss">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
