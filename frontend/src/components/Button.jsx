import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Button.module.scss";

function Button({ onClick, label }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      npm {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
