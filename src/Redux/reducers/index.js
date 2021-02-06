import { combineReducers } from 'redux';
import listReducer from './list';
import detailsReducer from './details';
import filterReducer from './filter';

const rootReducer = combineReducers({
  list: listReducer,
  details: detailsReducer,
  filter: filterReducer,
});

export default rootReducer;
