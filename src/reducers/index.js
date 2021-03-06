import {combineReducers} from 'redux';
import postListReducer from './post-list-reducer';
import toggleFormReducer from './toggle-form-reducer';
import detailsReducer from './details-reducer';

const rootReducer = combineReducers({
  masterPostList: postListReducer,
  formVisible: toggleFormReducer,
  postDetailsPage: detailsReducer
});

export default rootReducer;