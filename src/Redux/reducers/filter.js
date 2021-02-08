import { CHANGE_FILTER } from '../actions/actionTypes';

const filterReducer = (state = { currency: 'usd', sortBy: 'market_cap', order: 'desc' }, action) => {
  if (action.type === CHANGE_FILTER) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default filterReducer;
