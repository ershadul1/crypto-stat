import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Coin.module.css';
import roundNum from '../../helpers/roundNum';

const Coin = ({ data, currency }) => (
  <div>
    <Link className={styles.container} to={`/details/${data.id}`}>
      <div>
        <img className={styles.logo} src={data.image} alt={`${data.name}-logo`} />
        {data.name}
      </div>
      <div>
        {`${currency.toUpperCase()} ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.current_price)}`}
      </div>
      <div>
        {`${currency.toUpperCase()} ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.market_cap)}`}
      </div>
      <div>
        {roundNum(data.price_change_percentage_24h)}
        %
      </div>
      <div>
        {roundNum(data.price_change_percentage_7d_in_currency)}
        %
      </div>
    </Link>
  </div>
);

Coin.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    market_cap: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
    price_change_percentage_7d_in_currency: PropTypes.number.isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
};

export default Coin;
