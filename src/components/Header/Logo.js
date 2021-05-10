import React, {Component} from 'react';
import logo from '../../assets/img/logo.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                {/* <a href="/"><img src={logo} alt="Businex-Logo" /></a> */}
               
                <div 
                style={{"fontSize": "30px",
                        "fontWeight": "bold"
                         }}>
                    <p className="text-white">HostelHaze</p>
                </div>
            </div>
        );
    }
}

export default Logo;