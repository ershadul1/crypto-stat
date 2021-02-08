import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.container}>
      <Link className={styles.navlink} to="/">Crypto Stat</Link>
    </div>
  </nav>
);

export default Navbar;
