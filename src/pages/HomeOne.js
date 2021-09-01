import React, { Fragment } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/home-one";
import About from "../components/About/home-one";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
const HomeOne = (props) => {
  return (
    <Fragment>
      {console.log("IN HOME ONE JS the props is", props)}
      <Header history={props.history} />
      <Slider />
      <About />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </Fragment>
  );
};

export default HomeOne;
