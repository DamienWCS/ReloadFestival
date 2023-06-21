import React from "react";
import PropTypes from "prop-types";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.ticket.price * item.quantity,
    0
  );

  return (
    <div className="cart-content">
      {cartItems.map((item) => (
        <div key={item.ticket.id} className="cart-item">
          <div className="item-info">
            <div className="item-name">{item.ticket.name}</div>
            <div className="item-quantity">Quantité : {item.quantity}</div>
          </div>
          <div className="item-price">{item.ticket.price} €</div>
          <button type="button" onClick={() => removeFromCart(item.ticket)}>
            Supprimer
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="total-price">Prix total : {totalPrice} €</div>
      )}
      {cartItems.length === 0 && (
        <div className="empty-cart">Votre panier est vide</div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      ticket: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
