import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navigation-wrapper">
      <Link className="navigation-link" to="/">Knee</Link>
    </nav>
  )
}

export default Nav