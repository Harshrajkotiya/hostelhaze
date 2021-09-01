// import img from "../../assets/img/blog/01.jpg";
import React, { Component } from "react";
import fire from "../../firebase";
// import ComplainBox from "../../pages/ComplainBox";

class ComplainboxItem extends Component {
 
  onupdateclick() {
    console.log("update", this.props.complain.status);

    var updateRef = fire
      .firestore()
      .collection("complainbox")
      .doc(this.props.complain.id);

    // Set the "capital" field of the city 'DC'
    return updateRef
      .update({
        status: "close",
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
  

  render() {
    console.log("complain box item",this.props);
    let user = JSON.parse(localStorage.getItem("user"));
    

    var complainstatus = "";
    if (this.props.complain.status == "open") {
      complainstatus = (
        <div style={{ marginLeft: "280px" }}>
          <span
            className="badge bg-danger text-light"
            style={{ marginLeft: "100px" }}
          >
            Open
          </span>
        </div>
      );
    } else {
      complainstatus = (
        <div style={{ marginLeft: "280px" }}>
          <span
            className="badge bg-success text-light"
            style={{ marginLeft: "100px" }}
          >
            close
          </span>
        </div>
      );
    }
    var complainbutton = "";
    
    if (
      user.uid == this.props.complain.userid &&
      this.props.complain.status == "open"
    ) {
      complainbutton = (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.onupdateclick.bind(this)}
        >
          Close
        </button>
      );
    } else {
    }

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
          {/* <img src={img} /> */}
          {complainstatus}
          <div className="card-body" style={{ minWidth: "100%" }}>
            <h6 className="card-title" style={{ fontWeight: "600" }}>
              {this.props.complain.studentname}
            </h6>
            <h6 className="card-title" style={{ fontWeight: "500" }}>
              Room No:{this.props.complain.roomno}
            </h6>
            <p className="card-text" style={{ fontSize: "20px" }}>
              {this.props.complain.complaindesc}
            </p>

            {complainbutton}
            <div className="card-text" style={{ marginLeft: "300px" }}>
              <p className="card-text">
                {new Date(this.props.complain.time).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComplainboxItem;
