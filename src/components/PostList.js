import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import connect from "react-redux";


function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.masterPostList).map(post => {
        return <Post
          title = {post.title}
          id = {post.id}
          rating = {post.rating}
          poster = {post.poster}
          description = {post.description}
          time = {post.time}/>
      })}
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
