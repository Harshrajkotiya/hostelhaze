import React, { Component } from "react";
import { Fragment } from "react";
import fire from "../firebase";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  _isMounted = false;
  state = {
    email: "",
    password: "",
  };

  onRegisterClicked() {
    console.log("Login Button is Clicked!!!", this.state);
    console.log(this.props);

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User has Logged in", user);
        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("posts");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error while Logged in", error);
      });
  }

  componentDidMount() {
    this._isMounted = true;
    console.log("Component did mount of Login", this.props);
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Inside Login! and User exists", user);
      this.props.history.push("posts");
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <Fragment>
        <div
          className="off-canvas-item"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div className="log-in-content-wrap">
            <h2>Login</h2>
            <div className="login-form mtn-15">
              <form action="#" method="post">
                <div className="form-input-item">
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
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
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="sign-up-notification">
              <p>
                Not resister?{" "}
                <a href="/register">
                  Register in.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </Fragment>
    );
  }
}

export default Login;
