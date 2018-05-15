import React from 'react';
import Link from 'gatsby-link';
import '../../node_modules/materialize-css/dist/css/materialize.css';

const navbar = () => {
  return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">Logo</a>
        <ul className="left hide-on-med-and-down">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page-2'>Ashish</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default navbar;