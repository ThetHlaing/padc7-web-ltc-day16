import React from "react";

export default class LoginForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>
          {this.props.article.title} by {this.props.author.name}
        </h2>
        <p>{this.props.article.content}</p>
        <hr />
      </React.Fragment>
    );
  }
}
