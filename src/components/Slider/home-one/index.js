import React from 'react';
import SlickSlider from '../../UI/Slick'
import SliderData from '../../../data/Slider/home-1'


const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
    )
};

const Slider = () => {
        const settings = {
            arrows: true,
            dots: false,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className={'slider-area'}>
                <SlickSlider settings={settings}>
                    {
                        SliderData.map(item => (
                            <div key={item.id}>
                                <div className="slider-item"
                                     style={{backgroundImage: `url(${require('../../../assets/img/' + item.bg)})`}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-7">
                                                <div className="slider-content">
                                                    <h2 style={{marginLeft:"380px"}}>{item.title}</h2>
                                                    <p style={{marginLeft:"385px"}}>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SlickSlider>
            </div>
        );
    }
;

export default Slider;