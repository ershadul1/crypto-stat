import axios from 'axios';
import * as actions from './actionTypes';

const URL = 'https://api.coingecko.com/api/v3/coins';
const fetchList = () => dispatch => {
  axios.get(`${URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
    .then(response => {
      dispatch({ type: actions.FETCH_LIST, payload: response });
    })
    .catch(error => dispatch({ type: actions.FETCH_LIST_ERROR, payload: error }));
};

const fetchDetails = id => dispatch => {
  axios.get(`${URL}/${id}`)
    .then(response => {
      dispatch({ type: actions.FETCH_DETAILS, payload: response });
    })
    .catch(error => dispatch({ type: actions.FETCH_DETAILS_ERROR, payload: error }));
};

export { fetchList, fetchDetails };
