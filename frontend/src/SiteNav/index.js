import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SiteNav() {

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand><Link to="/">Movie Explorer</Link></Navbar.Brand>
    </Navbar>
  )
}

export default SiteNav;