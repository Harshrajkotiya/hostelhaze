import React, { Component } from "react";
import fire from "../../firebase";

class HeaderConfig extends Component {
  onlogoutClick() {
    console.log("helloo", this.props);
    localStorage.removeItem("user");

    fire
      .auth()
      .signOut()
      .then(() => {
        console.log("User has signed out!!!");
        this.props.history.replace("login");
      })
      .catch((e) => {
        console.log("error has occured", e);
      });
  }

  LoginRegHandler() {
    const offCanvasConfig = document.querySelector(".off-canvas-cog");
    offCanvasConfig.classList.add("active");
    document.querySelector("body").classList.add("fix");
  }

  MobileMenuHandler() {
    const offCanvasMenu = document.querySelector(".off-canvas-menu");
    offCanvasMenu.classList.add("active");
  }

  componentDidMount() {
      console.log("inisde did mount of Header Config", this.props)
  }

  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    let LoggedInHTML = "";
    if (!user) {
      LoggedInHTML = <a
        style={{
          color: "#FFFFFF",
          background: "#080b1a",
          textTransform: "uppercase",
        }}
        type="button"
        className="btn btn-dark"
        href='login'
        
      >
        Login
      </a>;
    } else {
      LoggedInHTML = (
        <div style={{display: 'flex', alignItems:'center'}}>
          <div className="tel-no"
               style={{flex:'1', whiteSpace:'nowrap'}}
          >
            {user.displayName}
       
          </div>
          <button
            style={{
              color: "#FFFFFF",
              background: "#080b1a",
              textTransform: "uppercase",
                flex:'1'
            }}
            type="button"
            className="btn btn-dark"
            onClick={this.onlogoutClick.bind(this)}
          >
            logout
          </button>
        </div>
      );
    }
    return (
      <div className="header-action mt-lg-3 text-right">
        {/* <button onClick={this.LoginRegHandler} className="btn-cog">
          <i className="fa fa-cog" />
        </button> */}
        {LoggedInHTML}

        <button onClick={this.MobileMenuHandler} className="btn-menu d-lg-none">
          <i className="fa fa-bars" />
        </button>
        {/* <button
          style={{
            color: "#FFFFFF",
            background: "#080b1a",
            "text-transform": "uppercase",
          }}
          type="button"
          class="btn btn-dark"
          onClick={this.onlogoutClick.bind(this)}
        >
          logout
        </button> */}
      </div>
    );
  }
}

export default HeaderConfig;
