import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectPost } from "../actions/postAction";

class PostList extends Component {
  createListItems() {
    return this.props.AllPosts.map((post) => {
      return (
        <li className="list-group-item">
          {post.name}{" "}
          <button
            class="btn btn-success btn-sm"
            key={post.id}
            onClick={() => this.props.selectPost(post)}
          >
            View
          </button>
        </li>
      );
    });
  }
  render() {
    if (!this.props.AllPosts) {
      return <h2>Click The Button First</h2>;
    }
    return (
      <div>
        <ul className="list-group">{this.createListItems()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    AllPosts: state.allPosts,
  };
}

function matchDisPatchToProps(dispatch) {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
}

export default connect(mapStateToProps, matchDisPatchToProps)(PostList);
