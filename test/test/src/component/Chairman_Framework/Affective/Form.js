import React, { Component } from "react";
import GET from "./GET";
import POST from "./POST";
export class Form extends Component {
  render() {
    return (
      <div>
        <POST />
        <GET />
      </div>
    );
  }
}

export default Form;
