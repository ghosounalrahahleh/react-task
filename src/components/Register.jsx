import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: {},
      users: {},
    };
  }

  render() {
    return (
      <div className="content">
        <div className="welcome">
          <h5>
            welcome{" "}
            <span>
              {localStorage.getItem("currentUser")
                ? localStorage.getItem("currentUser")
                : ""}{" "}
            </span>
          </h5>
          <h5>
            Your Email is :{" "}
            <span>
              {localStorage.getItem("email")
                ? localStorage.getItem("email")
                : ""}
            </span>
          </h5>
        </div>

        <form method="post" onSubmit={this.formSubmit} id="form">
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
            <input type="submit" value="Display" className="btn" />
            <input
              type="submit"
              value="Clear"
              className="btn clear"
              onClick={this.handleClear}
            />
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

  handleClear = (event) => {
    let userArray = JSON.parse(localStorage.getItem("myUsers"));
    let users = userArray;
    users.pop();
    localStorage.setItem("myUsers", JSON.stringify(users));
    document.querySelector(".welcome").style.display = "none";
    event.preventDefault();
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
      //save user info in array to push it into the userArray in localStorage
      var currentUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      };
      //concatenate the first name and last name then save it in variable
      //in localStorage for the current user
      localStorage.setItem(
        "currentUser",
        this.state.firstName + " " + this.state.lastName
      );
      //save email
      localStorage.setItem("email", this.state.email);

      //check if user array(myUsers)  exists to retrieve it then push the current user else just creat it
      if (JSON.parse(localStorage.getItem("myUsers") !== null)) {
        let userArray = JSON.parse(localStorage.getItem("myUsers"));
        let users = userArray;
        users.push(currentUser);
        localStorage.setItem("myUsers", JSON.stringify(users));
        //change styles
        document.querySelector(".welcome").style.display = "block";
        document.querySelector(".welcome").style.boxShadow =
          "-1px 2px 20px 0px #8FD20C";
      } else {
        localStorage.setItem("myUsers", JSON.stringify(currentUser));
      }
    }
  };
}

export default Register;
