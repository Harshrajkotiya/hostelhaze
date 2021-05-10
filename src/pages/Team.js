import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from '../templates/Team'
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/hostelpic/t2.jpg'



const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/hostelpic/A1.jpg')}
                title="KNOW ABOUT HostelHaze TEAM"
                // content="HostelHaze always try to provide the best..."
            />
            <About
                // title={'Our Team'}
                heading="Our Team"
                thumb={ ServiceThumb}
                content="<b>Name:</b> Harsh Rajkotiya"
                
            />
            
            {/* <TeamMember/> */}
            {/* <BrandLogo/> */}
            {/* <Funfact classes="sp-top"/> */}
            {/* <CallToAction/> */}
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;