import React from 'react';
import './style.css';

const Humburger = ({ toggleMenu }) => {
  return (
    <label className="burger" htmlFor="burger">
      <input type="checkbox" id="burger" onClick={toggleMenu} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Humburger;
