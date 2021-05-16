import React, { Component } from "react";
import fire from "../firebase";

class NewLostFound extends Component {
  state = {
    studentname: "",
    lostdesc: "",
    roomno:"",
    status:'open',
  };

  onsubClick() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user, this.state.studentname, this.state.lostdesc, this.state.roomno);
    this.props.history.replace('lostfound');
    

    //Add a new document with a generated id.
    fire.firestore().collection("lostfound")
      .add({
        studentname: this.state.studentname,
        lostdesc:this.state.lostdesc,
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
      console.log("Inside NewLost&Found! and User exists", user);
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
            <label for="exampleFormControlTextarea1">lost Descscription</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="lost Descscription"
              rows="3"
              onChange={(e) => this.setState({ lostdesc: e.target.value })}
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

export default NewLostFound;
