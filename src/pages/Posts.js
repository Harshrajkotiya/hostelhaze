import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import PostItem from "../components/Posts/PostItem";
import $ from "jquery";

import fire from "../firebase";
const postsdatajson = [
  { title: "suhas" },
  { title: "suhas1232342" },
  { title: "suasasdhas" },
  { title: "susddddddffhas" },
  { title: "sufffffffffhas" },
  { title: "susssshas" },
  { title: "suhas" },
];

export class Posts extends Component {
 
  state = {
    posts: [],
    loading: true,
  };

  onnewpostclick() {
    this.props.history.push('PostRequest')
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Inside Posts! and User exists", user);
      console.log("Component did mount started");

      fire
        .firestore()
        .collection("posts")
        .get()
        .then((querySnapshot) => {
          var tempposts = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data() , doc.id);
            let obj = doc.data()
            obj["id"] = doc.id
            tempposts.push(obj);
          });
          console.log("TempPost", tempposts);
          this.setState({
            loading: false,
            posts: tempposts,
          });
        });
        
    } else {
      this.props.history.replace("login");
    }
  }

  render() {
    
    const postsdata = postsdatajson;
    var PostHTML;
    if (this.state.loading) {
      PostHTML = <div> Loading Please wait......
      </div>;
    } else {
      PostHTML = (
        <div className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}>
          <div className="row">
            
            {this.state.posts.map((post) => {
              return (
                
                <PostItem post={post} />
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
          onClick={this.onnewpostclick.bind(this)}
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
        {PostHTML}
        {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/> */}
        {/* <CallToAction /> */}
        <Footer />
        <LoginRegister />
        <MobileMenu />
      </Fragment>
    );
  }
}

export default Posts;