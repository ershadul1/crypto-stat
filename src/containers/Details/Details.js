import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetails } from '../../Redux/actions/index';
import Chart from '../../components/Chart/Chart';
import * as styles from './Details.module.css';
import roundNum from '../../helpers/roundNum';

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

  const percent24 = roundNum(state.details.data.market_data.price_change_percentage_24h);
  const percent24Color = percent24 > 0 ? 'green' : 'red';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backcont}>
          <h1>
            {state.details.data.name}
            <img
              className={styles.logo}
              src={state.details.data.image.small}
              alt={state.details.data.name}
            />
            <div id={percent24Color}>
              {percent24}
              %
            </div>
          </h1>

          <h1>
            <Link className={styles.link} to="/">Back</Link>
          </h1>
        </div>

        <p>
          Rank #
          {state.details.data.coingecko_rank}
        </p>
        <p>
          {`Current Price: USD ${state.details.data.market_data.current_price.usd}`}
        </p>
        <p>
          {`Liquidity Score: ${state.details.data.liquidity_score}`}
        </p>
        <div className={styles.chart}>
          <Chart
            className={styles.chart}
            data={state.details.data.market_data.sparkline_7d.price}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  details: state.details,
});

const mapDispatchToProps = { fetchDetails };

export default connect(mapStateToProps, mapDispatchToProps)(Details);
