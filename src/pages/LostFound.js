import React, { Component, Fragment } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
// import $ from "jquery";
import fire from "../firebase";
import LostFoundItem from "./LostFoundItem";
const LostFonuddatajson = [
  { title: "suhas" },
  { title: "suhas1232342" },
  { title: "suasasdhas" },
  { title: "susddddddffhas" },
  { title: "sufffffffffhas" },
  { title: "susssshas" },
  { title: "suhas" },
];

export class LostFound extends Component {
  state = {
    LostFound: [],
    loading: true,
    role:"",
  };

  onnewLostFoundclick() {
    this.props.history.push("NewLostFound");
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Inside complainbox! and User exists", user);
      console.log("Component did mount started");

      
      console.log("user id", user.uid);
      var docRef = fire.firestore().collection("users").doc(user.uid);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      console.log("admin found and now complains fetch");

      fire
        .firestore()
        .collection("lostfound")
        .get()
        .then((querySnapshot) => {
          var tempLostFound = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data(), doc.id);
            let obj = doc.data();
            obj["id"] = doc.id;
            tempLostFound.push(obj);
          });
          
          console.log("tempLostFound before sorting", tempLostFound);
          tempLostFound = tempLostFound.sort((a, b) => b.time - a.time);
          console.log("TempLostFound", tempLostFound);
          this.setState({
            loading: false,
            lostfound: tempLostFound,
            
          });
        });

      console.log(" lost fetch complete");
    } else {
      this.props.history.replace("login");
    }
  }

  render() {
    const LostFounddata = LostFonuddatajson;
    var LostFoundHTML;
    if (this.state.loading) {
        LostFoundHTML = <div> Loading Please wait......</div>;
    } else {
        LostFoundHTML = (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="row">
            {this.state.LostFound.map((LostFound, key) => {
              return <LostFoundItem key={key} LostFound={LostFound} />;
            })}
          </div>
          
        </div>
      );
    }
    return (
      <Fragment>
        <Header {...this.props} />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={this.onnewLostFoundclick.bind(this)}
          >
            +
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New message
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Recipient:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        {LostFoundHTML}
        {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/> */}
        <CallToAction />
        <Footer />
        <LoginRegister />
        <MobileMenu />
      </Fragment>
    );
  }
}

export default LostFound;