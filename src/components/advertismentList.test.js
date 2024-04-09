import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AdvertismentList from './advertismentList'; 
import AdvertismentForm from './advertismentForm';
import rootReducer from '../reducers/rootReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('AdvertismentList Component', () => {
    test('renders Add Advertisment button', () => {
      const { getByText } = renderWithRedux(<AdvertismentList />);
      expect(getByText('Объявления')).toBeInTheDocument();
    });
  
    test('displays advertisments', () => {
      const initialState = {
        advertisments: {
          advertisments: [
            { id: 1, title: 'Ad 1', description: 'Description 1' },
            { id: 2, title: 'Ad 2', description: 'Description 2' },
          ],
        },
      };
      const { getByText } = renderWithRedux(<AdvertismentList />, { initialState });
      expect(getByText('Ad 1')).toBeInTheDocument();
      expect(getByText('Ad 2')).toBeInTheDocument();
    });
  
    test('renders Add Advertisment form when Add button is clicked', () => {
      const { getByText, getByPlaceholderText } = renderWithRedux(<AdvertismentForm />);
      fireEvent.click(getByText('Add Advertisment'));
      expect(getByPlaceholderText('Title')).toBeInTheDocument();
      expect(getByPlaceholderText('Description')).toBeInTheDocument();
    });
  
  });
  
