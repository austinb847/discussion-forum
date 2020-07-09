import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './PostList';
import PostForm from './PostForm';
import PostDetail from './PostDetail';


class PostControl extends React.Component
{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(props){
    let formFragment;
    let postDisplay;
    if (this.props.formVisible === true)
    {
      formFragment = <PostForm />
    }
    else
    {
      formFragment = null;
    }
    console.log(this.props.detailsPageId);
    if(this.props.detailsPageId){
      postDisplay = <PostDetail />
    }
    else
    {
      postDisplay = <PostList />
    }
    return(
      <React.Fragment>
        {postDisplay}
        {formFragment}
      </React.Fragment>
    )
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisible: PropTypes.bool,
  detailsPageId: PropTypes.object
};

const mapGlobalStateToProps = state => {
  return{
  masterPostList: state.masterPostList,
  formVisible: state.formVisible,
  detailsPageId: state.postDetailsPage
}}

PostControl = connect(mapGlobalStateToProps)(PostControl);

export default PostControl;