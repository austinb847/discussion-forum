import * as actionTypes from './../actions/ActionTypes';

// export default (state = {visible: false}, action) => {
//   const { description, poster, rating, time, title, id } = action;
//   switch(action.type){
//     case actionTypes.TOGGLE_DETAIL:
//       return {
//         ...state,
//         visible: !state.visible,
//         post: {
//           time: time,
//           rating: rating,
//           poster: poster,
//           description: description,
//           title: title,
//           id: id
//         }
//       }
//     default:
//       return state;
//   }
// };

export default (state = {id: null}, action) => {
  console.log(action);
  const { id } = action;
  switch(action.type){
    case actionTypes.TOGGLE_DETAIL:
      return {
        ...state,
        id: id
      }
    default:
      return state;
  }
};
