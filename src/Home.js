import React, { Component } from "react";
import fire from "./config/Fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // logout() {
  //   fire.auth().signOut();
  //   alert("Logout");
  // }
  render() {
    return (
      <div>
        <h1>You Are Logged in !!</h1>
        {/* <button onClick={this.logout}>Logout</button> */}
      </div>
    );
  }
}
export default Home;
