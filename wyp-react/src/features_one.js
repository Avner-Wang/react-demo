import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
// import ReactScripts from "react-scripts";

class Features_one extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "wypiscomeon",
      list: ["英语", "历史", "数学", "政治"],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}>添加学习清单列表</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index + item}>{item}</li>;
          })}
          {/* <li>英语</li>
          <li>历史</li>
          <li>数学</li> */}
        </ul>
      </Fragment>
    );
  }

  inputChange(e) {
    console.log(e);
    // this.state.inputValue = e.target.value;
    this.setState({
      inputValue: e.target.value,
    });
    console.log(this);
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      // list: ['英语','历史','数学','政治',this.state.list, this.state.inputValue],
    });
  }
}

export default Features_one;
