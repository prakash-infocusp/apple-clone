import PropTypes from "prop-types";
import styles from "./Heading.module.scss";

const Heading = ({
  text,
  color = "black",
  size = "h1",
  weight = "regular",
}) => {
  const sizeClass = {
    h0: styles["text-h0"],
    h1: styles["text-h1"],
    h2: styles["text-h2"],
    h3: styles["text-h3"],
    h4: styles["text-h4"],
    h5: styles["text-h5"],
    h6: styles["text-h6"],
  };

  const colorClass = {
    black: styles["text-black"],
    grey: styles["text-grey"],
    white: styles["text-white"],
    blue: styles["text-blue"],
  };

  const weightClass = {
    regular: styles["font-weight-400"],
    semi: styles["font-weight-500"],
    bold: styles["font-weight-600"],
    extraBold: styles["font-weight-700"],
  };

  return (
    <div
      className={`${sizeClass[size]} ${colorClass[color]} ${
        weightClass[weight]
      }`}
    >
      {text}
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["black", "grey", "white", "blue"]),
  size: PropTypes.oneOf(["h0", "h1", "h2", "h3", "h4", "h5", "h6"]),
  weight: PropTypes.oneOf([
    "font-weight-400",
    "font-weight-500",
    "font-weight-600",
    "font-weight-700",
  ]),
};

export default Heading;
