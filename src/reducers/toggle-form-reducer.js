import * as actionTypes from './../actions/ActionTypes';

export default (state = false, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};