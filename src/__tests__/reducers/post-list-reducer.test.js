import postListReducer from '../../reducers/post-list-reducer';
import { connect } from 'react-redux';

describe('postListReducer', () => {

  let action;
  const postData = {
    time: 'Wed 01-01-2009 6:00',
    rating: 4,
    poster: 'austinb',
    description: 'I love cheese, dont you?',
    id: 1
  }

  test('should return default state if there is no action type passed into reducer', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });


  test('should add new post to masterPostList', () => {
    const { time, rating, poster, description, id } = postData;
    action = {
      type: 'ADD_POST',
      time: time,
      rating: rating,
      poster: poster,
      description: description,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      id: {
        time: 'Wed 01-01-2009 6:00',
        rating: 4,
        poster: 'austinb',
        description: 'I love cheese, dont you?',
        id: 1
      }
    });
  });
 
  test('should upvote/downvote (adjust rating) of ticket in masterPostList', () => {
    const { time, rating, poster, description, id } = postData;
    action = {
      type: 'ADD_POST',
      time: time,
      rating: rating,
      poster: poster,
      description: description,
      id: id
    };

    postListReducer({}, action);

    const action2 = {
      type: 'ADD_POST',
      rating: (rating + 1),
      id: id,
      time: time,
      poster: poster,
      description: description
    }

    
    expect(postListReducer({}, action2)).toEqual({
      id: {
        time: 'Wed 01-01-2009 6:00',
        rating: 5,
        poster: 'austinb',
        description: 'I love cheese, dont you?',
        id: 1
      }
    })
  });
});

