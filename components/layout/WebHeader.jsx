import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { appleLogo, appleBlackLogo, searchBlackLogo, search } from "../index";
import { useLocation } from "react-router-dom";

const WebHeader = () => {
  const location = useLocation();

  const whiteThemeRoutes = ["/tv-home"];
  const blackThemeRoutes = ["/"];

  const isWhiteTheme = whiteThemeRoutes.includes(location.pathname);
  const isBlackTheme = blackThemeRoutes.includes(location.pathname);

  return (
    <header
      className={`${styles.webHeader} ${
        isWhiteTheme
          ? styles["whiteTheme"]
          : isBlackTheme
            ? styles["blackTheme"]
            : ""
      }`}
    >
      <nav className={styles.nav}>
        <ul className={styles.navListWeb}>
          <Link to="/">
            <img
              src={isWhiteTheme ? appleBlackLogo : appleLogo}
              width={16}
              height={16}
              alt="Logo"
              className={styles.logoImage}
            />
          </Link>

          <li className={styles.navItem}>
            <Link to="/store">Store</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/mac">Mac</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/ipad">iPad</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/iphone">iPhone</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/watch">Watch</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/airpods">AirPods</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/tv-home">TV & Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/support">Support</Link>
          </li>
          <img
            src={isWhiteTheme ? searchBlackLogo : search}
            width={16}
            height={16}
            alt="Logo"
            className={styles.logoImage}
          />
        </ul>
      </nav>
    </header>
  );
};

export default WebHeader;
