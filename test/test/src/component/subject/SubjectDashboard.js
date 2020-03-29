import React, { Fragment } from "react";
import Form from "./Form";
import Subjects from "./Subjects";
export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Subjects />
      </Fragment>
    </div>
  );
}
