import React, { Component } from "react";
import fire from "../firebase";

class PostRequest extends Component {
  state = {
    title: "",
    desc: "",
    imagefile:null
  };

  onsubClick() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user, this.state);

    if(!this.state.imagefile){
      alert('Please upload an image before you post!!!')
      return
    }
    console.log("Upload started!!", this.state.imagefile);
    fire
      .storage()
      .ref()
      .child("/postimage/" + Date.now().toString())
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

          fire.firestore().collection("posts")
          .add({
            title: this.state.title,
            description:this.state.desc,
            userid:user.uid,
            useremail:user.email,
            displayName: user.displayName,
            time:Date.now(),
            imageURL: downloadURL
          })
          .then((docRef) => {
            this.props.history.replace('posts');
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        });
      });
    //Add a new document with a generated id.
    
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
      console.log("Inside PostRequest! and User exists", user);
    } else {
      this.props.history.replace("login");
    }
  }
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <form>
        <input type="file" onChange={this.handlechange.bind(this)} />
          <div class="form-group">
            <label class="h6"
            for="exampleFormControlInput1">POST TITLE</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"

              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label class="h6" 
            for="exampleFormControlTextarea1">POST DESCRIPTION</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Description"
              rows="3"
              onChange={(e) => this.setState({ desc: e.target.value })}
            ></textarea>
          </div>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            
            
            <button
              
              onClick={this.onsubClick.bind(this)}
              type="button"
              class="btn btn-outline-dark"
              
            >
              submit
            </button>
            
        
            
          </div>
        </form>
      </div>
    );
  }
}

export default PostRequest;
