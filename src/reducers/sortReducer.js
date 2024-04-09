const initialState = 'date';

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
