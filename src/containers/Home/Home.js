import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchList, changeFilter } from '../../Redux/actions/index';
// import styles from './Home.module.css';
import Coin from '../../components/Coin/Coin';
import Filter from '../../components/Filter/Filter';
import sortData from '../../helpers/sortData';

const Home = state => {
  const fetchCoinList = filter => {
    state.fetchList(filter);
  };

  const changeFilter = filter => {
    let newFilter = { ...state.filter, ...filter };

    if (!filter.currency && state.filter.sortBy === filter.sortBy) {
      if (state.filter.order === 'desc') {
        newFilter = { ...newFilter, order: 'asc' };
      } else {
        newFilter = { ...newFilter, order: 'desc' };
      }
    }
    state.changeFilter(newFilter);
    fetchCoinList({ ...state.filter, ...newFilter });
  };

  useEffect(() => {
    fetchCoinList(state.filter);
  }, []);

  if (state.list.loading) {
    return <div>Loading...</div>;
  }

  if (state.list.error) {
    return (
      <div>
        Error:
        {state.list.errorDetails.message}
      </div>
    );
  }

  const data = sortData(state.list.data, state.filter.sortBy, state.filter.order);
  return (
    <>
      <button type="button" onClick={() => fetchCoinList(state.filter)}>FETCH_LIST</button>
      <Filter filter={changeFilter} />
      {data.map(item => <Coin key={item.id} data={item} currency={state.filter.currency} />)}
    </>
  );
};

const mapStateToProps = state => ({
  list: state.list,
  filter: state.filter,
});

const mapDispatchToProps = { fetchList, changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
