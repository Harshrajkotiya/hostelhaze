import React, { Component } from "react";
import fire from "../firebase";
// import fire from "../../firebase";
// import LostFound from './LostFound';
// import img from "../../assets/img/blog/01.jpg";

class LostFoundItem extends Component {
  onupdateclick() {
    console.log("update", this.props.lostfound.status);

    var updateRef = fire
      .firestore()
      .collection("lostfound")
      .doc(this.props.lostfound.id);

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
  //   fire
  //     .firestore()
  //     .collection("complainbox")
  //     .doc(this.props.complain.id)
  //     .delete()
  //     .then(() => {
  //       console.log("Document successfully deleted!");
  //     })
  //     .catch((error) => {
  //       console.error("Error removing document: ", error);
  //     });
  // }

  render() {
    console.log("complain box item", this.props.lostfound);
    let user = JSON.parse(localStorage.getItem("user"));
    var lostfoundstatus = "";
    
    if (this.props.lostfound.status == "open") {
      lostfoundstatus = (
        <div style={{ marginLeft: "280px" }}>
          <span
            className="badge bg-danger text-light"
            style={{ marginLeft: "100px" }}
          >
            Lost
          </span>
        </div>
      );
    } else {
      lostfoundstatus = (
        <div style={{ marginLeft: "280px" }}>
          <span
            className="badge bg-success text-light"
            style={{ marginLeft: "100px" }}
          >
            Found
          </span>
        </div>
      );
    }

    var lostfoundbutton = "";
    if (
      user.uid == this.props.lostfound.userid &&
      this.props.lostfound.status == "open"

    ) {
      lostfoundbutton = (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.onupdateclick.bind(this)}
        >
          Found
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
          {lostfoundstatus}
          <div className="card-body" style={{ minWidth: "100%" }}>
            <h6 className="card-title" style={{ fontWeight: "600" }}>
              {this.props.lostfound.studentname}
            </h6>
            <h6 className="card-title" style={{ fontWeight: "500" }}>
              Room No:{this.props.lostfound.roomno}
            </h6>
            <p className="card-text" style={{ fontSize: "20px" }}>
              {this.props.lostfound.lostdesc}
            </p>

            {lostfoundbutton}
            <div className="card-text" style={{ marginLeft: "300px" }}>
              <p className="card-text">
                {new Date(this.props.lostfound.time).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LostFoundItem;
