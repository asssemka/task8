// rootReducer.js

import { combineReducers } from 'redux';
import advertismentsReducer from './advertismentsReducer'; // Используйте правильный путь для импорта

const rootReducer = combineReducers({
  advertisments: advertismentsReducer // Убедитесь, что правильно используете редуктор
});

export default rootReducer;
