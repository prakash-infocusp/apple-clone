import styles from "./Header.module.scss";
import { appleLogo, searchIcon, hamburgerIcon, closeIcon } from "../index";

import { useState } from "react";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.mobileHeader}>
        <div className={styles.headerContainer}>
          <Link to="/">
            <img src={appleLogo} alt="Apple Logo" className={styles.logo} />
          </Link>

          <div className={styles.rightIcons}>
            <img src={searchIcon} alt="Search Icon" className={styles.icon} />
            <img
              src={hamburgerIcon}
              alt="Hamburger Icon"
              className={styles.icon}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.menuModal}>
          <div className={styles.menuHeader}>
            <button className={styles.closeButton} onClick={toggleMenu}>
              <img src={closeIcon} alt="Close Icon" />
            </button>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/store">
                  Store
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/mac">
                  Mac
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/ipad">
                  iPad
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/iphone">
                  iPhone
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/watch">
                  Watch
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/airpods">
                  AirPods
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/tv-home">
                  TV & Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/accessories">
                  Accessories
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link onClick={toggleMenu} to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
