import { FETCH_DETAILS, FETCH_DETAILS_ERROR } from '../actions/actionTypes';

const detailsReducer = (state = { loading: true, error: false }, action) => {
  switch (action.type) {
    case FETCH_DETAILS: {
      return { ...action.payload, loading: false, error: false };
    }
    case FETCH_DETAILS_ERROR: {
      return { loading: false, error: false, errorDetails: action.payload };
    }
    default:
      return state;
  }
};

export default detailsReducer;
