export default (state = {}, action) => {
  const { time, rating, poster, description, id } = action;
  switch(action.type) {
    case 'ADD_POST':
      return {
        ...state,
        id: {
          time: time,
          rating: rating,
          poster: poster,
          description: description,
          id: id
        }
      };
      case 'DELETE_POST':
        const newState = {...state};
        delete newState[id];
        return newState;
      default:
        return state;
  }
}


