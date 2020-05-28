import React, { Component, Fragment } from "react";

// 结构化赋值

class app extends Component {
  render() {
    return (
      <Fragment>
        <ul className="my-list">
          <li>{true ? "wwwwe" : "xxxxx"}</li>
          <li>love duoduo</li>
          <li></li>
          <li></li>
        </ul>
      </Fragment>
    );
    // var ab = React.createElement("li", null, "wyp-bifan");
    // var ac = React.createElement("li", null, "love duoduo");
    // var root = React.createElement("ul", { className: "my-list" }, ab, ac);
  }
}

export default app;
