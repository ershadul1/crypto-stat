import { combineReducers } from 'redux';
import listReducer from './list';
import detailsReducer from './details';

const rootReducer = combineReducers({
  list: listReducer,
  details: detailsReducer,
});

export default rootReducer;
