import React, { Component } from "react";
import Mapped from "./Mapping";
import Form from "./MapForm";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Form />
        <Mapped />
      </div>
    );
  }
}

export default Dashboard;
