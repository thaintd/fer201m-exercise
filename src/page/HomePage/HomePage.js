import React from "react";
import Navbar from "../../components/navbar/Navbar/Navbar";
import Banner from "../../components/banner/banner";
import Banner2 from "../../components/banner2/banner2";
import Frame from "../../components/Frame/Frame";
import Slider from "../../components/slider/slider";
import CallUs from "../../components/CallUs/footer";
import CardL from "../../components/CardL/CardL";
import Review from "../../components/Reviews/review";
import Instructor from "../../components/Instructors/instructor";
import Footer from "../../components/Footer/Footer";
import CardComponent from "../../components/cardComponent/cardComponent";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <Banner></Banner>
      <Frame />
      <Slider />
      <CardComponent />
      <CardL></CardL>
      <Banner2></Banner2>
      <Review />
      <Instructor />
      <CallUs></CallUs>
      <Footer />
    </div>
  );
}

export default HomePage;
