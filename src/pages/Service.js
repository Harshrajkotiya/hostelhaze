import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import About from "../components/About/page";

import ServiceThumb from "../assets/img/hostelpic/h7.jpg";
import ServiceThumb1 from "../assets/img/hostelpic/HostelHaze_pic_9.jpg";
import ServiceThumb2 from "../assets/img/hostelpic/h2.jpg";

const PageService = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={require("../assets/img/hostelpic/h6.jpg")}
        title="OUR SERVICES"
        content="HostelHaze always try to provide the best."
      />

      <PageAbout
        // title={'Our Services'}
        heading="Our Services"
        thumb={ServiceThumb}
        // thumb1={ServiceThumb1}
        // thumb2={ServiceThumb2}
        content="<b>Hostel Facility</b></br>

                <li>Always helpful hostel staff with current information,tips and recommendations...</li>
                <li>Free Wi-Fi in lobby.Hotspots are avaliable in the apartments...</li>
                <li>Separate residential facility for boys and girls within the campus</li>
                <li>An Easygoing, relaxing and friendly enviroment...</li>
                <li>Mess facility with Veg and Non-Veg meals...</li>
                <li>24x7 eletricity and water supply in all the hostels...</li>
                <li> Gymnasium</li>
                <li>Events and Activities </li></br>"
      />
      <div style={{ marginTop: "-100px" }}>
        <PageAbout
          thumb={ServiceThumb1}
          content="<b>Health Services</b>
            <li>Free Health care service is rendered to all students and staff.</li>
            <li>First Aid Facilities is available in all the departments.</li>
            <li>Emergency vehicle is available for 24 hours.</li></br>"
        />
      </div>
      <div style={{ marginTop: "-80px", marginBottom: "50px" }}>
        <PageAbout
          thumb={ServiceThumb2}
          content="<b>Sports Infrastructure within campus</b> 
            <li>Basketball court</li>
            <li>Cricket ground</li>
            <li>Hockey ground</li>
            <li>Indoor Badminton court</li>
            <li>Swimming pool</li>
            <li>Table tennis</li>
            <li>Chess</li>
            <li>Caroms</li>"
        />
      </div>
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageService;
