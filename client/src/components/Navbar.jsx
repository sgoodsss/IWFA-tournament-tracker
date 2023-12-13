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
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default AppNavbar;