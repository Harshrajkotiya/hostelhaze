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
import ServiceThumb1 from '../assets/img/hostelpic/T3.jpg'
import ServiceThumb2 from '../assets/img/hostelpic/T6.jpg'



const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/hostelpic/A1.jpg')}
                title="KNOW ABOUT HostelHaze TEAM"
            />
            <h2 style={{marginLeft:"40%",marginTop:"40px"}}>Our Team</h2>
            <About
                title={'Founder & Developer'}
                heading="Harsh Rajkotiya"
                thumb ={ ServiceThumb}
                content="<b>phone : </b>8733803586 </br> <b>E-mail : </b>harshrajkotiya2002@gmail.com"
                
                        

            />
            <About
                title={'Founder & Co-Developer'}
                heading="Hetvi Rajkotiya"
                thumb={ ServiceThumb1}
                content="<b>Phone : </b>7228850712 </br> <b>E-mail : </b>hetvirajkotiya111@gmail.com"
                
            />
            <About
                title={'Founder & Co-Developer'}
                heading="Suhas Lakhani"
                thumb={ ServiceThumb2}
                content="<b>phone : </b>9574491009</br> <b>E-mail : </b>lakhanisuhas10@gmail.com"
                
            />
            
           <div style={{marginBottom:"50px"}}/> 
            
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;