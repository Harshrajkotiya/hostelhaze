import React, { Component } from "react";
import fire from "../firebase";

class NewComplainbox extends Component {
  state = {
    studentname: "",
    complaindesc: "",
    roomno:"",
    status:'open',
  };

  onsubClick() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user, this.state.studentname, this.state.complaindesc, this.state.roomno);
    this.props.history.replace('complainbox');
    

    //Add a new document with a generated id.
    fire.firestore().collection("complainbox")
      .add({
        studentname: this.state.studentname,
        complaindesc:this.state.complaindesc,
        roomno:this.state.roomno,
        status:this.state.status,
        userid:user.uid,
        useremail:user.email,
        time:Date.now(),

      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Inside Newcomplainbox! and User exists", user);
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
          <div class="form-group">
            <label for="exampleFormControlInput1">Student Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name"
              onChange={(e) => this.setState({ studentname: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Room no.</label>
            <input
              type="integer"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Room no"
              onChange={(e) => this.setState({ roomno: e.target.value })}
            />
          </div>
          
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Complain Descscription</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Complain Descscription"
              rows="3"
              onChange={(e) => this.setState({ complaindesc: e.target.value })}
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

export default NewComplainbox;
