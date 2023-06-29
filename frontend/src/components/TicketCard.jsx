import React from "react";
import PropTypes from "prop-types";
import "../styles/TicketCard.scss";

function TicketCard({ ticketType, price, description, quantity, onClick }) {
  return (
    <div className={`ticket-card ${ticketType.toLowerCase()}`}>
      <div className="ticket-type">{ticketType}</div>
      <div className="ticket-price">Prix : {price} €</div>
      {quantity && <div className="ticket-quantity">Quantité : {quantity}</div>}
      <div className="ticket-description">{description}</div>
      <button className="ticket-button" type="button" onClick={onClick}>
        Ajouter au panier
      </button>
    </div>
  );
}

TicketCard.propTypes = {
  ticketType: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TicketCard;
