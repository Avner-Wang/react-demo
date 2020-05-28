import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
// import ReactScripts from "react-scripts";

class Features_one extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input />
          <button>添加学习清单列表</button>
        </div>
        <ul>
          <li>英语</li>
          <li>历史</li>
          <li>数学</li>
        </ul>
      </Fragment>
    );
  }
}

export default Features_one;
