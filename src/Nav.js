import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navigation-wrapper">
      <Link className="navigation-link" to="/">Healthy Knee</Link>
      <Link className="navigation-link" to="/arthrosis">Arthrosis </Link>
      <Link className="navigation-link" to="/arthritis">Arthritis </Link>
    </nav>
  )
}

export default Nav