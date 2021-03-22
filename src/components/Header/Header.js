import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' className='navbar-dark' expand='lg'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='./assets/images/southwestLogo.png'
            width='30'
            height='30'
            className='mr-2 d-inline-block align-top'
          />
          {/* Southwest Education */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='navBarLink' href='#home'>
              Home
            </Nav.Link>
            <NavDropdown
              className='navBarLink'
              title='Products'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item>
                <Link to='/ReadingPlus'>Reading Plus</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/SymphonyMath'>Symphony Math</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                <Link to='/RedboxVR'>RedboxVR</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                <Link to='/Testimonials'>Testimonials</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='navBarLink'
              title='Company'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>About Us</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Team</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Where We Reach
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navBarLink' href='#home'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
