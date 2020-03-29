import React, { Fragment } from "react";
import PostClo from "./POSTCLO";
import Clos from "./GetCLO";
export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <PostClo />
        <Clos />
      </Fragment>
    </div>
  );
}
