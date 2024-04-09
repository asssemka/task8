import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import AdvertismentForm from './advertismentForm';
import store from '../store/store'; // Import your Redux store

export default {
  title: 'Components/AdvertismentForm',
  component: AdvertismentForm,
};

export const Default = () => (
  <Provider store={store}> {/* Wrap your component with Provider and pass the Redux store */}
    <AdvertismentForm />
  </Provider>
);
