import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
// import ReactScripts from "react-scripts";
import "./style.css";
import Features_one_item from "./features_one_item";

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
        {/* 注释 */}
        <div className="inputF">
          <label htmlFor="wangyeping">添加服务</label>
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}>添加学习清单列表</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <Features_one_item
                key={index + item}
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
              />
            );

            {
              /*
              <li
                onClick={this.deleteItem.bind(this, index)}
                key={index + item}
                dangerouslySetInnerHTML={{ __html: item }}
              >
               可以解析input框内HTML标签 
               {item} 
                </li>
              
              */
            }
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
      inputValue: "",
      // list: ['英语','历史','数学','政治',this.state.list, this.state.inputValue],
    });
  }
  deleteItem(index) {
    // let list = this.state.list;
    // list.splice(index, 1);
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  }
}

export default Features_one;
