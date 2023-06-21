import React from "react";
import PropTypes from "prop-types";

function BasketCard({ ticketType, description, onClick }) {
  return (
    <div className="basket-card">
      <div className="basket-type">{ticketType}</div>
      <div className="basket-description">{description}</div>
      <button type="button" className="basket-button" onClick={onClick}>
        Dans ton panier !
      </button>
    </div>
  );
}

BasketCard.propTypes = {
  ticketType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BasketCard;
