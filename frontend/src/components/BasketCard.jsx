import React from "react";
import PropTypes from "prop-types";
import "../styles/BasketCard.scss";
import Button from "./Button";

function BasketCard({ ticketType, tickets, totalPrice, onRemove, onAdd }) {
  return (
    <div className="basket-card">
      <div className="basket-header">
        <h2>{ticketType}</h2>
      </div>
      <div className="basket-items">
        {tickets.map((ticket) => (
          <div className="basket-item">
            <div className="basket-item-name">{ticket.ticket.name}</div>
            <div className="basket-item-quantity">x{ticket.quantity}</div>
            <Button onClick={() => onRemove(ticket.ticket.id)} label="-" />
            <Button onClick={() => onAdd(ticket.ticket)} label="+" />
          </div>
        ))}
      </div>
      <div className="basket-total-price">Prix total : {totalPrice} €</div>
      <button type="button" className="basket-button">
        commande ton ticket !
      </button>
    </div>
  );
}

BasketCard.propTypes = {
  ticketType: PropTypes.string.isRequired,
  tickets: PropTypes.arrayOf.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default BasketCard;
