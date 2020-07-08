import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './PostList';
import PostForm from './PostForm';


class PostControl extends React.Component
{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <React.Fragment>
        <PostList />
        <PostForm />
      </React.Fragment>
    )
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisible: PropTypes.bool
};

const mapGlobalStateToProps = state => {
  return{
  masterPostList: state.masterPostList,
  formVisible: state.formVisible
}}

PostControl = connect(mapGlobalStateToProps)(PostControl);

export default PostControl;