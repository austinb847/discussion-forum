import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as action from './../actions';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

function Post(props) {

  const thisPost = props.masterPostList[props.detailsPageId.id];

  return (
    <React.Fragment>
      <div className="post">
        <h3>{thisPost.title}</h3>
        <h4>Posted By: {thisPost.poster}</h4>
        <hr/>
        <p>
          {thisPost.description}
        </p>
        <hr/>
        <span>Upvotes: {thisPost.rating}</span>
        <p>Posted At: {thisPost.time.toString()}</p>
        <LikeOutlined className = 'likeButton' onClick={() => upVote(thisPost, props)}></LikeOutlined>
        <DislikeOutlined className = 'likeButton' onClick={() => downVote(thisPost, props)}></DislikeOutlined><br/>
      </div>
    </React.Fragment>
  )
}

function upVote(thisPost, props){
  const { dispatch } = props;
  const post = {
    poster: thisPost.poster,
    id: thisPost.id,
    rating: (thisPost.rating + 1),
    time: thisPost.time,
    description: thisPost.description,
    title: thisPost.title
  }
  const newAction = action.addPost(post);
  dispatch(newAction);
}

function downVote(thisPost, props){
  const { dispatch } = props;
  const post = {
    poster: thisPost.poster,
    id: thisPost.id,
    rating: (thisPost.rating - 1),
    time: thisPost.time,
    description: thisPost.description,
    title: thisPost.title
  }
  const newAction = action.addPost(post);
  dispatch(newAction);
}

Post.propTypes = {
  // id: PropTypes.string,
  // rating: PropTypes.number,
  // poster: PropTypes.string,
  // description: PropTypes.string,
  // time: PropTypes.object
  masterPostList: PropTypes.object,
  detailsPageId: PropTypes.object
}

const mapGlobalStateToProps = state => {
  return{
    masterPostList: state.masterPostList,
    detailsPageId: state.postDetailsPage
  }
}

export default connect(mapGlobalStateToProps)(Post);