import React, { Fragment } from "react";
import Form from "./Form";
import Plos from "./Plos";
export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Plos />
      </Fragment>
    </div>
  );
}
