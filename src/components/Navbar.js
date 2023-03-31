import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h1>Bookstore CMS</h1>
    </div>
    <div>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <div>
      <span>User Log In</span>
    </div>
  </nav>
);

export default Navbar;
