import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/BasketCard.module.scss";
import Button from "./Button";

function BasketCard({ ticketType, tickets, totalPrice, onRemove, onAdd }) {
  return (
    <div className={styles["basket-card"]}>
      <div className={styles["basket-header"]}>
        <h2>{ticketType}</h2>
      </div>
      <div className={styles["basket-items"]}>
        {tickets.map((ticket) => (
          <div className={styles["basket-item"]}>
            <div className={styles["basket-item-name"]}>
              {ticket.ticket.name}
            </div>
            <div className={styles["basket-item-quantity"]}>
              x{ticket.quantity}
            </div>
            <Button onClick={() => onRemove(ticket.ticket.id)} label="-" />
            <Button onClick={() => onAdd(ticket.ticket)} label="+" />
          </div>
        ))}
      </div>
      <div className={styles["basket-total-price"]}>
        Prix total : {totalPrice} €
      </div>
      <button type="button" className={styles["basket-button"]}>
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
