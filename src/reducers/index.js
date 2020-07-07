import combineReducers from 'redux';
import postListReducer from './post-list-reducer';

const rootReducer = combineReducers({
  masterPostList: postListReducer,
});

export default rootReducer;