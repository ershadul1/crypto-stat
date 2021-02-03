import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList } from '../../Redux/actions/index';
import styles from './App.module.css';

const App = state => {
  const fetchCoinList = () => {
    state.fetchList();
  };

  useEffect(() => {
    fetchCoinList();
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
  const list = state.list.data.map(item => <p key={item.id}><Link to={`/details/${item.id}`}>{item.name}</Link></p>);
  return (
    <>
      <button type="button" onClick={fetchCoinList}>FETCH_LIST</button>
      <h1 className={styles.title}>
        APP
      </h1>
      {list}
    </>
  );
};

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = { fetchList };

export default connect(mapStateToProps, mapDispatchToProps)(App);
