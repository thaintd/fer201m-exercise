import React from "react";
import style from "./Card.module.scss";
import Demo1_IMG from "../../assets/images/demo/demo-01.png";
import Demo1_icon from "../../assets/images/demo/ci_group.png";
import Demo1_icon_2 from "../../assets/images/demo/ant-design_star-outlined.png";

export default function Card({
  image = Demo1_IMG,
  title = "Learn Marketing from Top Instructors.",
  student = "1.5k Students",
  time = "6 weeks",
  range = "4.5",
  monney = "30.5$",
}) {
  return (
    <div className={style.card}>
      <img src={image} alt="" />
      <div className={style.title}>
        <h4>{title}</h4>
        <span>
          <img src={Demo1_icon_2} alt="" />
          {range}
        </span>
      </div>

      <div className={style.footer}>
        <span className={style.time}>{time}</span>
        <div className={style.student}>
          <img src={Demo1_icon} alt="" />
          <span>{student}</span>
        </div>
        <h3 className={style.monney}>{monney}</h3>
      </div>
    </div>
  );
}
