import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import appleLogo from "./images/apple.png";
import appleBlackLogo from "./images/apple-black-logo.png";
import searchBlackLogo from "./images/search-black.png";
import search from "./images/search.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const whiteThemeRoutes = ["/tv-home"];
  const blackThemeRoutes = ["/"];

  const isWhiteTheme = whiteThemeRoutes.includes(location.pathname);
  const isBlackTheme = blackThemeRoutes.includes(location.pathname);

  return (
    <header
      className={`${styles.header} ${
        isWhiteTheme
          ? styles["whiteTheme"]
          : isBlackTheme
          ? styles["blackTheme"]
          : ""
      }`}
    >
      <nav className={styles.nav}>
        <ul className={styles.navList}>
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

export default Header;
