import React, { Component } from "react";
import { fetchPosts } from "../actions/postAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ButtonComponents extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.fetchPosts()}
          className="btn btn-primary btn-sm"
        >
          Click Me
        </button>
      </div>
    );
  }
}

function matchDisPatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(null, matchDisPatchToProps)(ButtonComponents);
