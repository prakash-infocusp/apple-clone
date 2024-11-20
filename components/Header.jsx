import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import appleLogo from './images/apple.png'; 
import search from './images/search.png';

const Header = () => {
  return (
    <header className={styles.header}>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
        <img
            src={appleLogo}
            width={16} 
            height={16}
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
          src={search}
          width={18}
          alt="Logo"
          className={styles.logoImage}
        />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
