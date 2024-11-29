import styles from "./Header.module.scss";
import appleLogo from "../images/apple.png";
import searchIcon from "../images/search.png";
import hamburgerIcon from "../images/hamburger.png";
import closeIcon from "../images/close.png";
import { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.mobileHeader}>
        <div className={styles.headerContainer}>
          <img src={appleLogo} alt="Apple Logo" className={styles.logo} />

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
                <a href="/store">Store</a>
              </li>
              <li className={styles.navItem}>
                <a href="/mac">Mac</a>
              </li>
              <li className={styles.navItem}>
                <a href="/ipad">iPad</a>
              </li>
              <li className={styles.navItem}>
                <a href="/iphone">iPhone</a>
              </li>
              <li className={styles.navItem}>
                <a href="/watch">Watch</a>
              </li>
              <li className={styles.navItem}>
                <a href="/airpods">AirPods</a>
              </li>
              <li className={styles.navItem}>
                <a href="/tv-home">TV & Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="/entertainment">Entertainment</a>
              </li>
              <li className={styles.navItem}>
                <a href="/accessories">Accessories</a>
              </li>
              <li className={styles.navItem}>
                <a href="/support">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
