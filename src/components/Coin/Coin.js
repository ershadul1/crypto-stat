import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Coin.module.css';
import roundNum from '../../helpers/roundNum';

const Coin = ({ data, currency }) => {
  const percent24 = roundNum(data.price_change_percentage_24h);
  const percent24Color = percent24 > 0 ? 'green' : 'red';
  const percent7d = roundNum(data.price_change_percentage_7d_in_currency);
  const percent7dColor = percent7d > 0 ? 'green' : 'red';
  return (
    <div>
      <Link className={styles.container} to={`/details/${data.id}`}>
        <div className={styles.cell}>
          <img className={styles.logo} src={data.image} alt={`${data.name}-logo`} />
          <p>{data.name}</p>
        </div>
        <div>
          {`${currency.toUpperCase()} ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.current_price)}`}
        </div>
        <div>
          {`${currency.toUpperCase()} ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.market_cap)}`}
        </div>
        <div>
          {`${currency.toUpperCase()} ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.total_volume)}`}
        </div>
        <div id={percent24Color}>
          {percent24}
          %
        </div>
        <div id={percent7dColor}>
          {roundNum(data.price_change_percentage_7d_in_currency)}
          %
        </div>
      </Link>
    </div>
  );
};

Coin.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    market_cap: PropTypes.number.isRequired,
    total_volume: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
    price_change_percentage_7d_in_currency: PropTypes.number.isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
};

export default Coin;
