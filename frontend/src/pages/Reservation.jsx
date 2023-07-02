import React, { useState, useEffect } from "react";
import TicketCard from "../components/TicketCard";
import BasketCard from "../components/BasketCard";
import styles from "../styles/Reservation.module.scss";

const TICKETS_DATA = [
  {
    id: 1,
    name: "Saturday",
    price: 40,
    description: "Ton pass pour la journée de Samedi!",
  },
  {
    id: 2,
    name: "Sunday",
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

  // Chargement du panier à partir du stockage local lors du chargement de la page
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Sauvegarde du panier dans le stockage local chaque fois qu'il est mis à jour
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
      updatedCartItems[existingItemIndex].quantity -= 1;

      if (updatedCartItems[existingItemIndex].quantity === 0) {
        updatedCartItems.splice(existingItemIndex, 1);
      }

      setCartItems(updatedCartItems);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.ticket.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      {TICKETS_DATA.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticketType={ticket.name}
          price={ticket.price}
          description={ticket.description}
          quantity={
            cartItems.find((item) => item.ticket.id === ticket.id)?.quantity ||
            0
          }
          onClick={() => addToCart(ticket)}
        />
      ))}
      {cartItems.length > 0 && (
        <div className={styles["cart-content"]}>
          <BasketCard
            ticketType="Panier"
            tickets={cartItems}
            totalPrice={totalPrice}
            onRemove={removeFromCart}
            onAdd={addToCart}
          />
        </div>
      )}
    </div>
  );
}

export default Reservation;
