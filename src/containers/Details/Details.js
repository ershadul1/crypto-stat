import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../../Redux/actions/index';

const Details = state => {
  const fetchCoinDetails = () => {
    state.fetchDetails(state.match.params.id);
  };

  useEffect(() => {
    fetchCoinDetails();
  }, []);

  if (state.details.loading) {
    return (<div>loading</div>);
  }

  if (state.details.error) {
    return (
      <div>
        Error:
        {state.details.errorMessage}
      </div>
    );
  }
  const data = state.details.data.market_data.current_price.usd;
  return (
    <>
      <h1>
        Details
      </h1>
      <button type="button" onClick={fetchCoinDetails}>FETCH_DETAILS</button>
      <p>{data}</p>
    </>
  );
};

const mapStateToProps = state => ({
  details: state.details,
});

const mapDispatchToProps = { fetchDetails };

export default connect(mapStateToProps, mapDispatchToProps)(Details);
