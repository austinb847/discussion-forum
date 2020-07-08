import * as actionTypes from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { time, rating, poster, description, title, id } = action;
  switch(action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        [id]: {
          time: time,
          rating: rating,
          poster: poster,
          description: description,
          title: title,
          id: id
        }
      };
      case actionTypes.DELETE_POST:
        const newState = {...state};
        delete newState[id];
        return newState;
      default:
        return state;
  }
}


