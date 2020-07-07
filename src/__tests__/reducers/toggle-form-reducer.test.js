import toggleFormReducer from '../../reducers/toggle-form-reducer';

describe('toggleFormReducer', () => {

  test('should toggle form state to true', () => {
    expect(toggleFormReducer(false, {type: 'TOGGLE_POST_FORM'})).toEqual(true);
  });
  
});
