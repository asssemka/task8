// actions/advertismentActions.js

export const ADD_ADVERTISMENT = 'ADD_ADVERTISMENT';
export const DELETE_ADVERTISMENT = 'DELETE_ADVERTISMENT';
export const UPDATE_ADVERTISMENT = 'UPDATE_ADVERTISMENT';

export const addAdvertisment = (advertisment) => {
  return {
    type: ADD_ADVERTISMENT,
    payload: advertisment,
  };
};

export const deleteAdvertisment = (advertismentId) => {
  return {
    type: DELETE_ADVERTISMENT,
    payload: advertismentId,
  };
};

export const updateAdvertisment = (advertismentId, updatedAdvertisment) => {
  return {
    type: UPDATE_ADVERTISMENT,
    payload: { advertismentId, updatedAdvertisment },
  };
};
