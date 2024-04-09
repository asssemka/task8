import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { addAdvertisment, deleteAdvertisment } from './actions/advertismentActions';
import './App.css';

const LazyAdvertismentForm = React.lazy(() => import('./components/advertismentForm'));
const LazyAdvertismentList = React.lazy(() => import('./components/advertismentList'));

const App = () => {
  const handleSubmitAdvertisment = (advertismentData) => {
    store.dispatch(addAdvertisment(advertismentData));
  };

  const handleDeleteAdvertisment = (advertismentId) => {
    store.dispatch(deleteAdvertisment(advertismentId));
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Advertisment Tracker</h1>
        <Suspense fallback={<div>Loading form...</div>}>
          <LazyAdvertismentForm onSubmit={handleSubmitAdvertisment} />
        </Suspense>
        <Suspense fallback={<div>Loading list...</div>}>
          <LazyAdvertismentList onDeleteAdvertisment={handleDeleteAdvertisment} />
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
