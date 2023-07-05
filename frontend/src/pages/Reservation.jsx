import React, { useState, useEffect } from "react";
import styles from "../styles/Reservation.module.scss";

const TICKETS_DATA = [
  {
    id: 1,
    name: "Samedi",
    price: 40,
    description: "Ton pass pour la journée de Samedi!",
  },
  {
    id: 2,
    name: "Dimanche",
    price: 50,
    description: "Ton pass pour la journée de dimanche!",
  },
  {
    id: 3,
    name: "Weekend",
    price: 80,
    description: "Ton pass pour le week-end entier!",
  },
];

function Reservation() {
  const [cartItems, setCartItems] = useState([]);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (ticket) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.ticket.id === ticket.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ticket, quantity: 1 }]);
    }
  };

  const removeFromCart = (ticketId) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.ticket.id === ticketId
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];

      while (existingItemIndex >= 0) {
        updatedCartItems[existingItemIndex].quantity = 0;
        if (updatedCartItems[existingItemIndex].quantity === 0) {
          updatedCartItems.splice(existingItemIndex, 1);
        }
        setCartItems(updatedCartItems);
        if (cartItems.length) {
          localStorage.removeItem("cartItems");
        }
      }
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.ticket.price * item.quantity,
    0
  );

  const handlePopUp = () => {
    setPopUp(!popUp);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className={styles.cart}>
      {TICKETS_DATA.map((ticket) => (
        <div
          key={ticket.name}
          className={`${styles["ticket-card"]} ${styles[`${ticket.name}`]}`}
        >
          <div className={styles["ticket-type"]}>{ticket.name}</div>
          <div className={styles["ticket-price"]}>Prix : {ticket.price} €</div>
          <div className={styles["ticket-description"]}>
            {ticket.description}
          </div>
          <button
            className={styles["ticket-button"]}
            type="button"
            onClick={() => addToCart(ticket)}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className={styles["basket-card"]}>
          <div className={styles["basket-header"]}>
            <h2>"Panier"</h2>
          </div>
          <div className={styles["basket-items"]}>
            {cartItems.map((ticket) => (
              <div key={ticket.ticket.name} className={styles["basket-item"]}>
                <div className={styles["basket-item-name"]}>
                  {ticket.ticket.name}
                </div>
                <div className={styles["basket-item-quantity"]}>
                  x{ticket.quantity}
                </div>
              </div>
            ))}
            <button
              type="button"
              className={styles.button}
              onClick={() => removeFromCart(cartItems[0].ticket.id)}
              label="-"
            >
              Vider le panier
            </button>
          </div>
          <div className={styles["basket-total-price"]}>
            Prix total : {totalPrice} €
          </div>
          <button
            type="button"
            className={styles["basket-button"]}
            onClick={handlePopUp}
          >
            commande ton ticket !
          </button>
        </div>
      )}
      {popUp && (
        <div className={styles["cadre-popUp"]}>
          <div className={styles.annonce}>
            <p className={styles["validation-achat"]}>
              Félicitations pour votre achat, on vous attends avec impatience
              pour le weekend du 19-20 août
            </p>
          </div>
          <button
            type="button"
            label="Fermer"
            className={styles.validation}
            onClick={setPopUp(!popUp)}
          />
        </div>
      )}
    </div>
  );
}

export default Reservation;
