import React from 'react';
import './Header.css';

function Header() {
  const items = ['Fundamental', 'Crucial', 'Core'];

  const generateRandomIndex = () => {
    return Math.floor(Math.random() * items.length);
  };

  return (
    <div id="header">
      <img
        alt="React logo"
        src=""
      />
      <h1>React Essentials</h1>
      <p>
        The {items[generateRandomIndex()]} concepts you will need for almost any
        app you are going to build!
      </p>
    </div>
  );
}

export default Header;
