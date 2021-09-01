import React, { Component } from "react";
import img from '../assets/img/hostelpic/T3.jpg'

class StudentInfo extends Component {
  onstudentinfoclick() {
    console.log("hello");
    this.props.history.replace("home");
  }
  render() {
    return (
      <div
        class="container"
        style={{
          //display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          //width:"100%",
          border: "5px solid #151515",
          
        }}
      >
        <form class="form-horizontal" role="form">
         
               
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              fontSize: "300%",
              fontWeight:"bold",
            }}
          >
            STUDENTINFO
          </div>
          <img src={img} style={{marginLeft:"500px",width:"150px"}}/>
          <div style={{marginLeft:"50px"}}>
          <div class="form-group">
            
            <label for="firstName" class="col-sm-3 control-label">
              First Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                class="form-control"
                autofocus
              />
            </div>
          </div>
          <div class="form-group">
            <label for="lastName" class="col-sm-3 control-label">
              Last Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                class="form-control"
                autofocus
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-3 control-label">
              Email*{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="form-control"
                name="email"
              />
            </div>
          </div>
          {/* <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password*</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Confirm Password*</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control">
                    </div>
                </div> */}
          <div class="form-group">
            <label for="birthDate" class="col-sm-3 control-label">
              Date of Birth*
            </label>
            <div class="col-sm-9">
              <input type="date" id="birthDate" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label for="phoneNumber" class="col-sm-3 control-label">
              Phone number{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                class="form-control"
              />
              {/* <span class="help-block">Your phone number won't be disclosed anywhere </span> */}
            </div>
          </div>
          <div class="form-group">
            <label for="Height" class="col-sm-3 control-label">
              Height*{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="float"
                id="height"
                placeholder="Please write your height in centimetres"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="weight" class="col-sm-3 control-label">
              Weight*{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="float"
                id="weight"
                placeholder="Please write your weight in kilograms"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Gender</label>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-4">
                  <label class="radio-inline">
                    <input
                      type="radio"
                      id="femaleRadio"
                      name="choice"
                      value="Male"
                    />
                    Male
                  </label>
                </div>
                <div class="col-sm-4">
                  <label class="radio-inline">
                    <input
                      type="radio"
                      id="maleRadio"
                      name="choice"
                      value="Female"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
              <span class="help-block">*Required fields</span>
            </div>
          </div>
          <div>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                width: "300px",
              }}
              onClick={this.onstudentinfoclick.bind(this)}
              type="submit"
              className="btn btn-outline-dark"
            >
              Submit
            </button>
            
          </div>
          </div>
        </form>
      </div>

    );
  }
}

export default StudentInfo;
