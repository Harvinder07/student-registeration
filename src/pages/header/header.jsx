// import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {

  return (
    <ul>
      <li>
        <NavLink to='/add-student' activeClassName="activeStyle" className="navStyle">Add Student</NavLink>
      </li>
      <li>
        <NavLink to='/view-student' activeClassName="activeStyle" className="navStyle">View Student</NavLink>
      </li>
    </ul>
    
  );
};

export default Header;
