import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
// import DailyFormEntry from './DailyFormEntry';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className='nav'>
        <a href="/" className='site-title'>IWFA Tournament Tracker</a>
        <ul>
        {Auth.loggedIn() ? (
          <>
            <li>
              <a href="/user">My Scores</a>
            </li>
            <li>
              <a onClick={Auth.logout}>Logout</a>
            </li>
          </>
        ) : (
          <>
          </>
        )}
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
      </nav>
    </>
  );
};

export default AppNavbar;

//  <Navbar bg='light' expand="lg" className="bg-body-tertiary">
{/* <Container>
<Navbar.Brand className="navBrand" as={Link} to='/'> IWFA Tournament Tracker </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
  {Auth.loggedIn() ? (
      <>
        <Nav.Link className="navLink" as={Link} to='/user'>
          My Scoresheet
        </Nav.Link>

        <Nav.Link className="navLink" onClick={Auth.logout}>
          Logout
        </Nav.Link>
      </>
    ) : (
      <>
        <Nav.Link className="navLink" as={Link} to='/login'>
          Login
        </Nav.Link>

        <Nav.Link className="navLink" as={Link} to='/signup'>
          Sign Up
        </Nav.Link>
      </>
    )}   
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar> */}