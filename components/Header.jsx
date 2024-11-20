import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
        <img
            src="/apple.png" 
            alt="Logo"
            className={styles.logoImage}
          />
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
            src="/assets/logo.png" 
            alt="Logo"
            className={styles.logoImage}
          />
          <img
            src="/assets/logo.png" 
            alt="Logo"
            className={styles.logoImage}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
