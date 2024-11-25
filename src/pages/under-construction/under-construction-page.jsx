import PropTypes from "prop-types";

const UnderConstructionPage = ({ pageName }) => {
  const textStyle = {
    fontSize: "40px",
    marginTop: "100px",
    textAlign: "center",
  };

  return (
    <div style={textStyle}>
      <h1>{pageName} Page</h1>
      <p>This page is currently under construction. Please check back later.</p>
    </div>
  );
};

UnderConstructionPage.propTypes = {
  pageName: PropTypes.string,
};

export default UnderConstructionPage;
