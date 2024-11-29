import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ text, variant = "primary", size = "small" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "plain"]),
  size: PropTypes.oneOf(["small", "big"]),
};

export default Button;
