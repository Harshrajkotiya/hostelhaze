import React from 'react';
import parse from "html-react-parser";
import aboutData from "../../../data/About/home-two";
import aboutThumb from '../../../assets/img/hostelpic/h3.jpg'
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="container" style={{marginBottom:"200px"}}>
        <div className="col-xs-9 " style={{justifyContent:"right"}} >
            
            <img style={{width:"50%"}}  src={aboutThumb} className="float-right"/>
            <h2 style={{marginTop:"30px"}}>{aboutData.title}</h2>
                       <h2>{parse(aboutData.heading)}</h2>
                       {/* <span className="about-since">{aboutData.since}</span> */}
                       <p className="col-lg-6">{parse(aboutData.text)}</p>
        </div>
        </div>
        
    );
};

export default About;
