// reducers/advertismentsReducer.js
// reducers/advertismentsReducer.js

import { ADD_ADVERTISMENT, DELETE_ADVERTISMENT, UPDATE_ADVERTISMENT } from '../actions/advertismentActions';

const initialState = {
  advertisments: []
};

const advertismentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADVERTISMENT:
      return {
        ...state,
        advertisments: [...state.advertisments, action.payload]
      };
    case DELETE_ADVERTISMENT:
      return {
        ...state,
        advertisments: state.advertisments.filter(advertisment => advertisment.id !== action.payload)
      };
    case UPDATE_ADVERTISMENT:
      return {
        ...state,
        advertisments: state.advertisments.map(advertisment => {
          if (advertisment.id === action.payload.advertismentId) {
            return {
              ...advertisment,
              ...action.payload.updatedAdvertisment
            };
          }
          return advertisment;
        })
      };
    default:
      return state;
  }
};

export default advertismentsReducer;
