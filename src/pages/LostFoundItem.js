import React, { Component } from "react";
// import fire from "../../firebase";
// import LostFound from './LostFound';
// import img from "../../assets/img/blog/01.jpg";

class LostFoundItem extends Component {

  onupdateclick() {
    console.log("update", this.props.LostFound.status);
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
    console.log("Lost item", this.props.LostFound);

    var LostFoundstatus = "";

    if (this.props.LostFound.status == "open")
     {
        LostFoundstatus = (
          <div style={{ marginLeft: "280px" }}>
            <span className="badge bg-danger text-light" style={{ marginLeft: "100px" }} >
              Open
            </span>
          </div>
        ); 
    }
     else {
      LostFoundstatus = (
        <div style={{ marginLeft: "280px" }}>
          <span className="badge bg-success text-light" style={{ marginLeft: "100px" }}>
            close
          </span>
        </div>
      );
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
          {LostFoundstatus}
          <div className="card-body" style={{ "minWidth": "100%" }}>
            <h6 className="card-title"style={{fontWeight:"600"}}>{this.props.LostFound.studentname}</h6>
            <h6 className="card-title"style={{fontWeight:"500"}}>Room No:{this.props.LostFound.roomno}</h6>
            <p className="card-text"style={{fontSize:"20px"}}>{this.props.LostFound.lostdesc}</p>

            
             <button
              type="button"
              className="btn btn-outline-dark"
              
              onClick={this.onupdateclick.bind(this)}
            >
              Update
            </button>
            <div className="card-text" style={{ marginLeft: "300px" }}>
              <p className="card-text">
                {new Date(this.props.LostFound.time).toLocaleString()}
              </p>
            </div> 
            
          
          </div>
        </div>
      </div>
    );
  }
}

export default LostFoundItem;
