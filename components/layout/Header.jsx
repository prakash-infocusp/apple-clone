import styles from "./Header.module.scss";
import MobileHeader from "./MobileHeader";
import WebHeader from "./WebHeader";

const Header = () => {
  return (
    <>
      <div className={styles.webHeader}>
        <WebHeader />
      </div>
      <div className={styles.mobileHeader}>
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
