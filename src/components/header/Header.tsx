import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="app-header">
    <section className="top-header">
      <h1>CSS, JavaScript, API</h1>
    </section>
    <h2>Contacts Application</h2>
    <p className="description">View basic info of contacts in a 3x2 layout. Click on the magnifier icon to open a modal and view detailed contact info contact</p>
  </header>
);

export default Header;