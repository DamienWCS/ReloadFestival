import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.scss";

function Button({ onClick, label }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
