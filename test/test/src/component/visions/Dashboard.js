import React, { Fragment } from "react";
import Form from "./Form";
import Visions from "./Visions";
export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Visions />
      </Fragment>
    </div>
  );
}
