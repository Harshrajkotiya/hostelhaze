import img from "../../assets/img/hostelpic/h1.jpg";
import React, { Component } from "react";
import fire from "../../firebase";

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.ondeletepostclick = this.ondeletepostclick.bind(this);
  }
  state = {
    posts: [],
    loading: true,
  };

  ondeletepostclick() {
    console.log("delete", this.props.post);

    fire
      .firestore()
      .collection("posts")
      .doc(this.props.post.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document:", error);
      });
  }

  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    var DeleteButton = "";
    console.log(
      "this is the user",
      user,
      "and this is the id of the person with the post : ",
      this.props.post.userid
    );
    if (user.uid == this.props.post.userid) {
      DeleteButton = (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.ondeletepostclick}
        >
          Delete
        </button>
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
          <div
            className="card-title"
            style={{ marginRight: "300px", marginTop: "10px", }}
          >
            <h4 className="card-title"style={{fontWeight:"600"}}>{this.props.post.displayName}</h4>
          </div>
          <img src={this.props.post.imageURL || img} />

          <div className="card-body" style={{ "min-width": "100%" }}>
            <h5 className="card-title"style={{fontWeight:"600"}}>{this.props.post.title}</h5>
            <p className="card-text">{this.props.post.description}</p>

            {/* <ion-icon name="trash-outline"></ion-icon> */}

            {DeleteButton}
          </div>
          <div className="card-text" style={{ marginLeft: "300px" }}>
            <p className="card-text">
              {new Date(this.props.post.time).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
