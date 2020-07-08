import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as action from './../actions';

function PostList(props) {

  const array = Object.values(props.masterPostList).sort(function(a, b){
    return b.rating - a.rating;
  });

  return (
    <React.Fragment>
      <div className="postList">
        {array.map(post => {
          return <Post
            title = {post.title}
            id = {post.id}
            rating = {post.rating}
            poster = {post.poster}
            description = {post.description}
            time = {post.time}
            key={post.id}/>
        })}
        <button onClick={() => props.dispatch(action.toggleForm())}>New Post</button>
      </div>
    </React.Fragment>
  )
}



PostList.propTypes = {
  masterPostList: PropTypes.object
}

const mapGlobalStateToProps = state => {
  return{
    masterPostList: state.masterPostList
  }
}

export default connect(mapGlobalStateToProps)(PostList);




