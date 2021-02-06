import axios from 'axios';
import * as actions from './actionTypes';

const URL = 'https://api.coingecko.com/api/v3/coins';
const fetchList = filter => dispatch => {
  axios.get(`${URL}/markets?vs_currency=${filter.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d`)
    .then(response => {
      dispatch({ type: actions.FETCH_LIST, payload: response });
    })
    .catch(error => dispatch({ type: actions.FETCH_LIST_ERROR, payload: error }));
};

const fetchDetails = id => dispatch => {
  axios.get(`${URL}/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
    .then(response => {
      dispatch({ type: actions.FETCH_DETAILS, payload: response });
    })
    .catch(error => dispatch({ type: actions.FETCH_DETAILS_ERROR, payload: error }));
};

const changeFilter = filter => dispatch => dispatch(
  { type: actions.CHANGE_FILTER, payload: filter },
);

export {
  fetchList, fetchDetails, changeFilter,
};
