import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ text, variant = "primary", size = "small" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
  size: PropTypes.oneOf(["small", "big"]),
};

export default Button;
