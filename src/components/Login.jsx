import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      auth: false,
    };
  }

  render() {
    return (
      <div>
        <small>{this.state.errors["notExist"]}</small>
        <form id="" onSubmit={this.formSubmit}>
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
            <input type="submit" value="Submit" />
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
    let userArray = JSON.parse(localStorage.getItem("myUsers"));

     //Email Validation
     if (this.state.email === "") {
        errors["email"] = "This field is required!";
        isValid = false;
      }
      if (this.state.password === "") {
        errors["password"] = "This field is required!";
        isValid = false;
      }

    userArray.map((user) => {

      if (
        user["email"] === this.state.email &&
        user["password"] === this.state.password
      ) {
        this.setState({ auth: true });
      } else if (
        user["email"] === this.state.email &&
        user["password"] !== this.state.password
      ) {
        isValid = false;
        errors["password"] = "Yours pass is not correct !";
      } else {
        isValid = false;
      }
    });

    
    if (this.state.auth === true  ) {
      errors = [];
      alert("you are logged in!");
    }else{
        errors["notExist"] = "Yours have to register first !";

    }

    //save errors in the state
    this.setState({ errors: errors });

    if (isValid === false) {
     
      event.preventDefault();
    }
  };
}

export default Login;
