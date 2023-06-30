import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/TicketCard.module.scss";

function TicketCard({ ticketType, price, description, quantity, onClick }) {
  return (
    <div className={styles[`ticket-card ${ticketType.toLowerCase()}`]}>
      <div className={styles["ticket-type"]}>{ticketType}</div>
      <div className={styles["ticket-price"]}>Prix : {price} €</div>
      {quantity && (
        <div className={styles["ticket-quantity"]}>Quantité : {quantity}</div>
      )}
      <div className={styles["ticket-description"]}>{description}</div>
      <button
        className={styles["ticket-button"]}
        type="button"
        onClick={onClick}
      >
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
