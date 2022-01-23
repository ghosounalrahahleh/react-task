import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      fullName: "",
      email: "",
      dispalyEmail: "",
      password: "",
      errors: {},
      users: {},
      userCount: 0,
    };
  }

  render() {
    return (
      <div className="registerForm">
        <div className="welcome">
          <h5>
            welcome <span>{this.state.fullName} </span>
          </h5>
          <h5>
            Your Email is : <span>{this.state.dispalyEmail}</span>
          </h5>
        </div>

        <form id="" onSubmit={this.formSubmit}>
          <h4 align="center">Sign Up </h4>
          <div className="input-div">
            <label>First Name </label>
            <input type="text" name="firstName" onChange={this.setValue} />
            <small>{this.state.errors["firstName"]}</small>
          </div>

          <div className="input-div">
            <label>Last Name </label>
            <input type="text" name="lastName" onChange={this.setValue} />
            <small>{this.state.errors["LastName"]}</small>
          </div>

          <div className="input-div">
            <label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.setValue}
            />
            <small>{this.state.errors["email"]}</small>
          </div>

          <div className="input-div">
            <label>Password </label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.setValue}
            />
            <small>{this.state.errors["password"]}</small>
          </div>

          <div className="input-div">
            <input type="submit" value="Display" id="btn" />
          </div>
        </form>
      </div>
    );
  }
  setValue = (e) => {
    this.setState({ errors: "" });
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  formSubmit = (event) => {
    let isValid = true;
    let errors = {};
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    //User Name Validation
    if (this.state.firstName === "") {
      isValid = false;
      errors["firstName"] = "This field is required!";
    }

    if (this.state.lastName === "") {
      isValid = false;
      errors["LastName"] = "This field is required!";
    }

    //Email Validation
    if (this.state.email === "") {
      errors["email"] = "This field is required!";
      isValid = false;
    } else if (!emailRegex.test(this.state.email)) {
      errors["email"] = "It is not valid email";
      isValid = false;
    }

    //password Validation
    if (this.state.password === "") {
      errors["password"] = "This field is required!";
      isValid = false;
    } else if (!passRegex.test(this.state.password)) {
      errors["password"] = "It should be more than 8 character";
      isValid = false;
    }

    this.setState({ errors: errors });
    event.preventDefault();

    if (isValid === true) {
      this.setState({
        fullName: this.state.firstName + " " + this.state.lastName,
        dispalyEmail: this.state.email,
      });
      document.querySelector('.welcome').style.display ="block";
    }

    //  else {

    //save data in localStorage
    //   var currentUser = {
    //     userName: this.state.userName,
    //     email: this.state.email,
    //     password: this.state.password,
    //   };
    //   let userArray = JSON.parse(localStorage.getItem("myUsers"));
    //   let users = userArray;
    //   users.push(currentUser);
    //   localStorage.setItem("myUsers", JSON.stringify(users));
    //
    // }
  };
}

export default Register;
