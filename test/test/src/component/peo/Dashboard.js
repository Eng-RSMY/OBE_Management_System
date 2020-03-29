import React, { Component } from "react";
import Form from "./Form";
import Peos from "./Peos";
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Form />
        <Peos />
      </div>
    );
  }
}

export default Dashboard;
