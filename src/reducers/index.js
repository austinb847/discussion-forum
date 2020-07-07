import {combineReducers} from 'redux';
import postListReducer from './post-list-reducer';
import toggleFormReducer from './toggle-form-reducer';

const rootReducer = combineReducers({
  masterPostList: postListReducer,
  formVisible: toggleFormReducer
});

export default rootReducer;