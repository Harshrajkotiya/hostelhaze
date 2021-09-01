import React, { Component, Fragment } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import LostFoundItem from "../pages/LostFoundItem";

// import $ from "jquery";
import fire from "../firebase";
const lostfounddatajson = [
  { title: "suhas" },
  { title: "suhas1232342" },
  { title: "suasasdhas" },
  { title: "susddddddffhas" },
  { title: "sufffffffffhas" },
  { title: "susssshas" },
  { title: "suhas" },
];

export class lostfound extends Component {
  state = {
    lostfound: [],
    loading: true,
    role:"",
  };

  onnewlostfoundclick() {
    this.props.history.push("Newlostfound");
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
          var templostfound = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data(), doc.id);
            let obj = doc.data();
            obj["id"] = doc.id;
            templostfound.push(obj);
          });
          
          console.log("templostfound before sorting", templostfound);
          templostfound = templostfound.sort((a, b) => b.time - a.time);
          console.log("Templostfound", templostfound);
          this.setState({
            loading: false,
            lostfound: templostfound,
            
          });
        });

      console.log(" complains fetch complete");
    } else {
      this.props.history.replace("login");
    }
  }

  render() {
    const lostfounddata = lostfounddatajson;
    var lostfoundHTML;
    if (this.state.loading) {
      lostfoundHTML = <div> Loading Please wait......</div>;
    } else {
      lostfoundHTML = (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="row">
            {this.state.lostfound.map((lostfound, key) => {
              return <LostFoundItem key={key} lostfound={lostfound} />;
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
            onClick={this.onnewlostfoundclick.bind(this)}
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
        {lostfoundHTML}
        {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/> */}
        {/* <CallToAction /> */}
        <Footer />
        <LoginRegister />
        <MobileMenu />
      </Fragment>
    );
  }
}

export default lostfound;