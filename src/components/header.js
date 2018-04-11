import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/buttons">Buttons</NavLink></li>
      <li><NavLink to="/selects">Selects</NavLink></li>
      <li><NavLink to="/grids">Grids</NavLink></li>
    </ul>
  </div>
);

export default Header;
