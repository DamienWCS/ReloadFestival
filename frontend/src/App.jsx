import React, { useState } from "react";
import TicketCard from "./components/TicketCard";
import BasketCard from "./components/BasketCard";
import "./styles/TicketCard.css";
import "./styles/BasketCard.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (ticket) => {
    const existingItem = cartItems.find((item) => item.ticket.id === ticket.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.ticket.id === ticket.id
          ? { ticket, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ticket, quantity: 1 }]);
    }
  };

  const ticketData = [
    {
      id: 2,
      name: "Saturday",
      price: 40,
      description: "Billet pour le samedi",
    },
    {
      id: 3,
      name: "Sunday",
      price: 50,
      description: "Billet pour le dimanche",
    },
    {
      id: 4,
      name: "Weekend",
      price: 80,
      description: "Billet pour le week-end",
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.ticket.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      {ticketData.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticketType={ticket.name}
          price={ticket.price}
          description={ticket.description}
          onClick={() => addToCart(ticket)}
        />
      ))}
      {cartItems.length > 0 && (
        <div className="cart-content">
          <BasketCard
            ticketType="Panier"
            description={cartItems
              .map((item) => `${item.ticket.name} x ${item.quantity}`)
              .join(", ")}
            onClick={() => {}}
          />
        </div>
      )}
      <div className="total-price">Prix total : {totalPrice} €</div>
    </div>
  );
}

export default App;
