import { combineReducers } from 'redux';
import search from './searchbarReducer';

const rootReducer = combineReducers({
  search
});

export default rootReducer;