import React from "react";
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-area sp-bottom">
      <div className="container">
        <div className="row mtn 0">
          <div className="col-lg-4 order-4 order-lg-0">
            <div className="widget-item">
              <div className="about-widget">
                

                    <div 
                    style={{
                      "fontSize": "30px",
                      "fontweight": "700",
                      "display": "block",
                      "marginbottom": "30px",
                      }}>
                    <strong>HostelHaze</strong>
                    </div>
                <Text>
                Always try to provide the best....
                </Text>

                <Text classes="copyright-txt">
                  &copy; {new Date().getFullYear()} HostelHaze edu. 
                </Text>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Information">
              <List classes="widget-list">
                <LI>
                  <Link to={`${process.env.PUBLIC_URL + "/about"}`}>
                    Our Hostel
                  </Link>
                </LI>
                                <LI>
                  <Link to={`${process.env.PUBLIC_URL + "/services"}`}>
                    Our services
                  </Link>
                </LI>
                <LI>
                <Link to={`${process.env.PUBLIC_URL + "/team"}`}>
                    Our Team
                  </Link>
                  </LI>
                  <LI>
                  <Link to={`${process.env.PUBLIC_URL + "/contact"}`}>
                    Contact us
                  </Link>
                </LI>
                  
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-2 ml-auto">
            <Widget title="Social Links">
              <List classes="widget-list">
               <LI> <a href="https://www.facebook.com" target={"_blank"}>
                  Facebook
                </a>
                </LI>
                <LI> <a
                  href="https://www.instagram.com/cute___kamina___02"
                  target={"_blank"}
                >
                  Instagram
                </a>
                </LI>
                <br />
                
               
              </List>
            </Widget>
          </div>

          <div className="col-md-4 col-lg-3">
            <Widget title="Contact Us">
              <address>
                L.E.collage(Diploma),Morbi <br />
                8733803586
              </address>
            </Widget>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
