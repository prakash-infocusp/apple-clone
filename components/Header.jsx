import React from "react";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link to="/">
          {/* <img
            src="/assets/logo.png" 
            alt="Logo"
            className={styles.logoImage}
          /> */}
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Store</li>
          <li className={styles.navItem}>Mac</li>
          <li className={styles.navItem}>iPad</li>
          <li className={styles.navItem}>iPhone</li>
          <li className={styles.navItem}>Watch</li>
          <li className={styles.navItem}>AirPods</li>
          <li className={styles.navItem}>
            <Link to="/tv-home">TV & Home</Link>
          </li>
          <li className={styles.navItem}>Entertainment</li>
          <li className={styles.navItem}>Accessories</li>
          <li className={styles.navItem}>Support</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
