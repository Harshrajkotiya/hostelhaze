import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


import fire from "../firebase";

import PostItem from "../components/Posts/PostItem";
import { Fragment } from "react";

class MessMenu extends Component {
  state = {
    posts: [],
    imagefile: null,
    loading: true,
  };

  handleUpload() {
    console.log("Upload started!!", this.state.imagefile);
    fire
      .storage()
      .ref()
      .child("/messimage/" + Date.now().toString())
      .put(this.state.imagefile)
      .then((snapshot) => {
        console.log("got the snapshot, now getting the downloadURL" , snapshot)
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(
            "The image has been uploaded success!!! at the URL --->",
            downloadURL
            
          );

          fire
            .firestore()
            .collection("messmenu")
            .add({
              time:Date.now(),

              imageURL: downloadURL,
            })
            .then(() => {
              console.log("the data has been written to the firestore success");
              
            });
        });
      });
     
  }

  handlechange(e) {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({
        imagefile: e.target.files[0],
      });
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Inside Posts! and User exists", user);
      console.log("Component did mount started");

      fire
        .firestore()
        .collection("messmenu")
        .get()
        .then((querySnapshot) => {
          var tempposts = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data(), doc.id);
            let obj = doc.data();
            obj["id"] = doc.id;
            tempposts.push(obj);
          });
          console.log("temppost before sorting" , tempposts)
          tempposts = tempposts.sort((a, b) => b.time - a.time)
          console.log("TempPost", tempposts);
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
  // onMessMenuchooseclick() {
  //   // this.props.history.push('PostRequest')
  //   console.log("hello");
  // }
  // onMessMenuuploadclick() {
  //   // this.props.history.push('PostRequest')
  //   console.log("hi");
  // }

  render() {
    var messmenuHTML;
    if (this.state.loading) {
      messmenuHTML = <div> Loading Please wait......</div>;
    } else {
      messmenuHTML = (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="row">
            {this.state.posts.map((post) => {
              return (
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={post.imageURL} />
                    <div className="card-text" style={{ marginLeft: "300px" }}>
        
            <p className="card-text">
              {new Date(post.time).toLocaleString()}
            </p>
          </div>
                  </div>
                </div>
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
            
          justifyContent: "center",
          marginTop: "20px",
          
          }}
        >
        <input type="file" onChange={this.handlechange.bind(this)} />
        <button class="btn btn-outline-dark" onClick={this.handleUpload.bind(this)}>Upload</button>
        </div>
        <div className="container">
        {messmenuHTML}
        </div>
      
        
     
      <Footer />
      </Fragment>
    );
     
  }
}

export default MessMenu;
