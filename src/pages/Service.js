import React,{Fragment} from 'react';
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

import ServiceThumb from '../assets/img/hostelpic/h7.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/hostelpic/h6.jpg')}
                title="OUR SERVICES"
                content="HostelHaze always try to provide the best."
            />
            <PageAbout
                // title={'Our Services'}
                heading="Our Services"
                thumb={ServiceThumb}
                content="<li>Always helpful hostel staff with current information,tips and recommendations...</li>
                <li>Free Wi-Fi in lobby.Hotspots are avaliable in the apartments...</li>
                <li>An Easygoing, relaxing and friendly enviroment...</li>"

            />
                <div style={{marginBottom:"50px"}}></div>
            {/* <Services classes="sm-top"/> */}
            {/* <PricingTable/> */}
            {/* <Testimonial/> */}
            {/* <BrandLogo/> */}
            {/* <Funfact classes="sp-top"/> */}
            {/* <CallToAction/> */}
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;