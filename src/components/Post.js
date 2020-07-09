import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as action from './../actions';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

function Post(props) {

  //onClick={dispatch(action.postDetails(somearguments))}

  return (
    <React.Fragment>
      <div className="post" onClick={() => toggleDetails(props)}> 
        <h3>{props.title}</h3>
        <h4>Posted By: {props.poster}</h4>
        <hr/>
        <p>
          {props.description}
        </p>
        <hr/>
        <span>Upvotes: {props.rating}</span>
        <p>Posted At: {props.time.toString()}</p>
        <LikeOutlined className = 'likeButton' onClick={() => upVote(props)}></LikeOutlined>
        <DislikeOutlined className = 'likeButton' onClick={() => downVote(props)}></DislikeOutlined><br/>
      </div>
      <br></br>
    </React.Fragment>
  )
}

function toggleDetails(props){
  const {dispatch} = props;
  const id = props.id;
  const newAction = action.toggleDetail(id)
  dispatch(newAction);

}

function upVote(props){
  const { dispatch } = props;
  const post = {
    poster: props.poster,
    id: props.id,
    rating: (props.rating + 1),
    time: props.time,
    description: props.description,
    title: props.title
  }
  const newAction = action.addPost(post);
  dispatch(newAction);
}

function downVote(props){
  const { dispatch } = props;
  const post = {
    poster: props.poster,
    id: props.id,
    rating: (props.rating - 1),
    time: props.time,
    description: props.description,
    title: props.title
  }
  const newAction = action.addPost(post)
  dispatch(newAction);
}

Post.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  poster: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.object
}

const mapGlobalStateToProps = state => {
  return{
    masterPostList: state.masterPostList,
    postDetailsPage: state.postDetailsPage
  }
}

export default connect(mapGlobalStateToProps)(Post);

