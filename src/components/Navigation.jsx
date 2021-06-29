import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/images/fiverr-logo.png';
import { Squash as Hamburger } from 'hamburger-react';
import '../styles/navigation.css';

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='light'>
      <Navbar.Brand href='/'>
        <img src={Logo} alt='logo' className='navbar-logo mx-3' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' className='p-0 mx-3'>
        <Hamburger rounded size={40} />
      </Navbar.Toggle>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/sign-in'>Sign in</Nav.Link>
          <Nav.Link href='/sign-up'>Join</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
