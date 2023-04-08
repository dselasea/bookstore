import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h1>Bookstore CMS</h1>
    </div>
    <div className="nav-links">
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <div>
      <span className="user-icon"><i className="fa-solid fa-user fa-lg" style={{ color: '#0290ff' }} /></span>
    </div>
  </nav>
);

export default Navbar;
