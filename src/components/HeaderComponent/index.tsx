import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.header__links__item__link}>
          Logo
        </Link>
      </h1>
      <nav className={styles.header__nav}>
        <ul className={styles.header__links}>
          <li className={styles.header__links__item}>
            <Link to="/" className={styles.header__links__item__link}>
              Всі
            </Link>
          </li>
          <li className={styles.header__links__item}>
            <Link to="/removed" className={styles.header__links__item__link}>
              Видалені
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
