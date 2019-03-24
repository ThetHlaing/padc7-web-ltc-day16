import React from "react";

class ToDo extends React.Component {
  handleOnClick = () =>{    
    this.props.onClick(this.props.item.id)
  }
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.item.complete ? "line-through" : "none"
        }}
        onClick={this.handleOnClick}
      >
        {this.props.item.text}
      </li>
    );
  }
}

export default ToDo;
