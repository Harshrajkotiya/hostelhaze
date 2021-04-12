import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import BlogPage from "../templates/Blog";
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

  componentDidMount() {
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })
    console.log("Component did mount started");
    fire
      .firestore()
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        var tempposts = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          tempposts.push(doc.data());
        });
        console.log("TempPost", tempposts);
        this.setState({
          loading: false,
          posts: tempposts,
        });
      });
  }

  render() {
    const postsdata = postsdatajson;
    var PostHTML;
    if (this.state.loading) {
      PostHTML = <div> Loading Please wait......</div>;
    } else {
      PostHTML = (
        <div className="container">
          <div className="row">
            {this.state.posts.map((post) => {
              return (
                <PostItem title={post.title} description={post.description} />
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <Fragment>
        <Header />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          sajflkasjfalksf
        </div>
        <button
          type="button"
          className="btn btn-primary"
        >
          Open modal for @getbootstrap
        </button>

        {PostHTML}
        {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/> */}
        <CallToAction />
        <Footer />
        <LoginRegister />
        <MobileMenu />
      </Fragment>
    );
  }
}

export default Posts;
