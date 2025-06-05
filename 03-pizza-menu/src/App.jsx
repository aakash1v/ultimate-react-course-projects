import "./App.css";
import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>our menu</h2>
      {numPizzas > 0 && (
        <>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos eum sint quo!
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza, i) => (
              <Pizza pizzaObj={pizza} key={i} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Footer() {
  // return React.createElement('footer', null, "We're currently opne !!")
  const currentHour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;
  const isOpen =
    currentHour >= openHour && currentHour <= closeHour ? true : false;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently {isOpen ? 'open' : 'closed'} !! */}

      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>Closed</p>
      )}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out': ''}` }>
      <img src={pizzaObj.photoName} alt="Pizza spinaci" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT ":pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        {" "}
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
