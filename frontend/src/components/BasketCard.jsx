import React from "react";
import PropTypes from "prop-types";
import "../styles/BasketCard.scss";

function BasketCard({ ticketType, description, onClick, totalPrice }) {
  return (
    <div className="basket-card">
      <div className="basket-type">{ticketType}</div>
      <div className="basket-description">{description}</div>
      <div className="basket-total-price">Prix total : {totalPrice} €</div>
      <button type="button" className="basket-button" onClick={onClick}>
        commande ton ticket !
      </button>
    </div>
  );
}

BasketCard.propTypes = {
  ticketType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default BasketCard;
