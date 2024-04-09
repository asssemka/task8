import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'; 
import expenseReducer from '../src/reducers/expensesReducer';

const store = createStore(expenseReducer, applyMiddleware(thunk));

export default store;
