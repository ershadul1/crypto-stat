import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import currency from './currency';

const Filter = ({ filter }) => (
  <>
    <div className={styles.selector}>
      <span className={styles.label}>Currency</span>
      <select className={styles.category} onChange={e => filter({ currency: e.target.value })}>
        {currency.map(item => <option key={item} value={item}>{item.toUpperCase()}</option>)}
      </select>
    </div>
    <div className={styles.container}>
      <div onClick={() => filter({ sortBy: 'name' })} onKeyPress={() => filter({ sortBy: 'name' })} role="button" tabIndex={0}>
        Coin
        <span>&#8593;&#8595;</span>
      </div>
      <div onClick={() => filter({ sortBy: 'current_price' })} onKeyPress={() => filter({ sortBy: 'current_price' })} role="button" tabIndex={0}>
        Price
        <span>&#8593;&#8595;</span>
      </div>
      <div onClick={() => filter({ sortBy: 'market_cap' })} onKeyPress={() => filter({ sortBy: 'market_cap' })} role="button" tabIndex={0}>
        Market Cap
        <span>&#8593;&#8595;</span>
      </div>
      <div onClick={() => filter({ sortBy: 'total_volume' })} onKeyPress={() => filter({ sortBy: 'total_volume' })} role="button" tabIndex={0}>
        Total Volume
        <span>&#8593;&#8595;</span>
      </div>
      <div onClick={() => filter({ sortBy: 'price_change_percentage_24h_in_currency' })} onKeyPress={() => filter({ sortBy: 'price_change_percentage_24h_in_currency' })} role="button" tabIndex={0}>
        24H
        <span>&#8593;&#8595;</span>
      </div>
      <div onClick={() => filter({ sortBy: 'price_change_percentage_7d_in_currency' })} onKeyPress={() => filter({ sortBy: 'price_change_percentage_7d_in_currency' })} role="button" tabIndex={0}>
        7D
        <span>&#8593;&#8595;</span>
      </div>
    </div>
  </>
);

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;
