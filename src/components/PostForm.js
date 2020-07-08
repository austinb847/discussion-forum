import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import {connect} from 'react-redux';
import * as action from './../actions';

function PostForm(props) {
  return (
    <React.Fragment >
      <form class="newPostForm" onSubmit={(event) => newPost(event, props)}>
        <input
          type='text'
          name='title'
          placeholder='title'/><br/>
          <input
            type='text'
            name='poster'
            placeholder='User name' /><br/>
        <textarea
          type='text'
          name='description'
          placeholder='Enter Description'/><br/>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

function newPost(event, props){
  event.preventDefault();
  const {dispatch} = props;
  const post = {
    poster: event.target.poster.value,
    title: event.target.title.value,
    description: event.target.description.value,
    time: new Date(),
    id: v4(),
    rating: 0
  }
  const newAction = action.addPost(post)
  dispatch(newAction);
}

PostForm.propTypes = {
  masterPostList: PropTypes.object
}

const mapGlobalStateToProps = state => {
  return {
    masterPostList: state.masterPostList
  }
}

// connect(mapGlobalStateToProps)(newPost);
export default connect(mapGlobalStateToProps)(PostForm)

