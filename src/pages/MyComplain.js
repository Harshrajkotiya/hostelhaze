import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import BlogPage from "../templates/Blog";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import ComplainboxItem from "../components/Posts/ComplainboxItem";
import $ from "jquery";

import fire from "../firebase";
const complainboxdatajson = [
  { title: "suhas" },
  { title: "suhas1232342" },
  { title: "suasasdhas" },
  { title: "susddddddffhas" },
  { title: "sufffffffffhas" },
  { title: "susssshas" },
  { title: "suhas" },
];

export class ComplainBox extends Component {
  state = {
    complainbox: [],
    loading: true,
  };

  onnewcomplainboxclick() {
    this.props.history.push('NewComplainbox')
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Inside complainbox! and User exists", user);
      console.log("Component did mount started");

      fire
        .firestore()
        .collection("complainbox")
        .where('userid' , '==', user.uid)
        .get()
        .then((querySnapshot) => {
          var tempcomplainbox = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data() , doc.id);
            let obj = doc.data()
            obj["id"] = doc.id
            tempcomplainbox.push(obj);
          });
          console.log("tempcomplainbox before sorting" , tempcomplainbox)
          tempcomplainbox = tempcomplainbox.sort((a, b) => b.time - a.time)
          console.log("Tempcomplainbox", tempcomplainbox);
          this.setState({
            loading: false,
            complainbox: tempcomplainbox,
          });
        });
    } else {
       this.props.history.replace("login");
    }
  }

  render() {
    const complainboxdata = complainboxdatajson;
    var complainHTML;
    if (this.state.loading) {
      complainHTML = <div> Loading Please wait......</div>;
    } else {
      complainHTML = (
        <div className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}>
          <div className="row">
            {this.state.complainbox.map((complain) => {
              return (
                <ComplainboxItem complain={complain} />
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <Fragment>
        <Header {...this.props}/>
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
          onClick={this.onnewcomplainboxclick.bind(this)}
        >
          +
        </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
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
                    <label for="recipient-name" className="col-form-label">
                      Recipient:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                        <div className="form-group">
                    <label for="message-text" className="col-form-label">
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
        {complainHTML}
        {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/> */}
        <CallToAction />
        <Footer />
        <LoginRegister />
        <MobileMenu />
      </Fragment>
    );
  }
}

export default ComplainBox;
