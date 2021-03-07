import React, { Component } from "react";
import fire from "./config/Fire";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = initialState;
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        alert("You Are Login Successfully ");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Details");
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        alert("You have been successfully Registered and logged in.");
      })
      .catch((err) => {
        console.log(err);
        alert("Password is Weak or Email Incorrect");
      });
  }
  validate = () => {
    let emailError = "";
    // let passwordError = "";
    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
          <br></br>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="enter Password"
            value={this.state.password}
          />
          <br></br>
          <br></br>
          <br></br>
          <button onClick={this.login} style={{ color: "green" }}>
            Login
          </button>
          &nbsp;
          <button onClick={this.signup} style={{ color: "blue" }}>
            SignUp
          </button>
          <p>Forgot Password ?</p>
        </form>
      </div>
    );
  }
}
export default Login;
