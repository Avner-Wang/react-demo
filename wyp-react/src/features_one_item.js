import React, { Component } from "react";

class Features_one_item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {};
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.content}</li>
      //   <li
      //     onClick={this.deleteItem.bind(this, index)}
      //     key={index + item}
      //     dangerouslySetInnerHTML={{ __html: item }}
      //   >

      //   </li>
    );
  }

  handleClick() {
    console.log("dianji");
    this.props.deleteItem(this.props.index);
  }
}

export default Features_one_item;
