import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedPost extends Component {
  render() {
    if (this.props.SelectedPost) {
      return (
        <div style={{ textAlign: "left" }}>
          <h4>User ID: {this.props.SelectedPost.name}</h4>
          <h4>User Name: {this.props.SelectedPost.name}</h4>
          <h4>User Phone: {this.props.SelectedPost.phone}</h4>
          <h4>User Email: {this.props.SelectedPost.email}</h4>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    SelectedPost: state.selectedPost,
  };
}

export default connect(mapStateToProps)(SelectedPost);
