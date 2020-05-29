import React, { Component } from "react";
import PropTypes from "prop-types";

class Features_one_item extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {};
  render() {
    return (
      <li onClick={this.handleClick}>
        {/* {this.props.content} */}
        {this.props.avname}哈哈哈哈-{this.props.content}
      </li>
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
Features_one_item.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
};

Features_one_item.defaultProps = {
  avname: "bifan",
};

export default Features_one_item;
