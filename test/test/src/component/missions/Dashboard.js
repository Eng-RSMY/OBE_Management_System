import React, { Component } from "react";
import Form from "./Form";
import Missions from "./Missions";
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Form />
        <Missions />
      </div>
    );
  }
}

export default Dashboard;
