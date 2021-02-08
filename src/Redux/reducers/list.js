import { FETCH_LIST, FETCH_LIST_ERROR } from '../actions/actionTypes';

const listReducer = (state = { loading: true, error: false }, action) => {
  switch (action.type) {
    case FETCH_LIST: {
      return { ...action.payload, loading: false, error: false };
    }
    case FETCH_LIST_ERROR: {
      return { loading: false, error: true, errorDetails: action.payload };
    }
    default:
      return state;
  }
};

export default listReducer;
