import React, { Component } from "react";
import { Fragment } from "react";
import fire from "../firebase";

class Register extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
  };

  onRegisterClicked() {
    console.log("Register Button is Clicked!!!", this.state);
    

    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("USer has been created", user);
        var newuser = fire.auth().currentUser;

        console.log("The currently logged in user from firebase is", newuser);
        let that = this;
        newuser
          .updateProfile({
            displayName: this.state.displayName,
          })
          .then(function () {
            console.log("The displayName has been added" , newuser);
            let tempuser = newuser
            fire
              .firestore()
              .collection("users")
              .doc(newuser.uid)
              .set({
                role: "student",
                displayName: tempuser.displayName,
                email: tempuser.email,
              })
              .then(() => {
                console.log("Written to firebase successfully");
                that.props.history.push('login')
              })
              .catch(e => {
                console.log("error while setting data to firebase", e)
              })

            // Update successful.
          })
          .catch(function (error) {
            // An error happened.
          });
 
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error while creating user", errorCode, errorMessage);
        // ..
      });
  }
  render() {
    return (
      <Fragment>
        <div
          className="off-canvas-item"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <div className="log-in-content-wrap">
            <h2>Register</h2>
            <div className="login-form mtn-15">
              <form action="#" method="post">
                <div className="form-input-item">
                  <label htmlFor="username" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Email"
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-input-item">
                  <label htmlFor="username" className="sr-only">
                    Display Name
                  </label>
                  <input
                    type="text"
                    id="displayname"
                    placeholder="Enter your nickname"
                    required
                    onChange={(e) =>
                      this.setState({ displayName: e.target.value })
                    }
                  />
                </div>

                <div className="form-input-item">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>

                <div className="form-input-item">
                  <button
                    type="button"
                    className="btn-submit"
                    onClick={this.onRegisterClicked.bind(this)}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            <div className="sign-up-notification">
              <p>
                Already Resisted?{" "}
                <a href="/login">Login In.</a>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
