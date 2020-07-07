import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function Post(props) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h2>Posted By: {props.poster}</h2>
      <p>
        {props.description}
      </p>
      <span>Upvotes: {props.rating}</span>
      <p>Posted At: {props.time.toString()}</p>
      <button onClick={() => upVote(props)}>Upvote</button><br/>
      <button onClick={() => downVote(props)}>DownVote</button><br/>
    </React.Fragment>
  )
}

function upVote(props){
  const { dispatch } = props;
  const action = {
    type: "ADD_POST",
    poster: props.poster,
    id: props.id,
    rating: (props.rating + 1),
    time: props.time,
    description: props.description,
    title: props.title
  }
  dispatch(action);
}

function downVote(props){
  const { dispatch } = props;
  const action = {
    type: "ADD_POST",
    name: props.name,
    id: props.id,
    rating: (props.rating - 1),
    time: props.time,
    description: props.description,
    title: props.title
  }
  dispatch(action);
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
    masterPostList: state.masterPostList
  }
}

export default connect(mapGlobalStateToProps)(Post);

