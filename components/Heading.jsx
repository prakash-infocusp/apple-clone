import PropTypes from "prop-types";
import styles from "./Heading.module.css";

const Heading = ({ text, color = "black", size = "h1" }) => {
  const sizeClass = {
    h0: styles["text-h0"],
    h1: styles["text-h1"],
    h2: styles["text-h2"],
    h3: styles["text-h3"],
  };

  const colorClass = {
    black: styles["text-black"],
    grey: styles["text-grey"],
    white: styles["text-white"],
  };

  return (
    <div className={`${sizeClass[size]} ${colorClass[color]}`}>{text}</div>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(["black", "grey", "white"]),
  size: PropTypes.oneOf(["h0", "h1", "h2", "h3"]),
};

export default Heading;
