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
        <Navbar.Brand>
          <img
            alt=''
            src='./assets/images/southwestLogo.png'
            width='30'
            height='30'
            className='mr-2 d-inline-block align-top'
          />
         {/* <h1 className='mainTitle'>Southwest Education</h1> */}
        </Navbar.Brand>
        <Navbar.Brand className='mainTitle'>
          Southwest Education
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='navBarLink'>
            <Link to='/'>Home</Link>
            </Nav.Link>
            <NavDropdown
              title='Products'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item>
                <Link to='/ReadingPlus'>Reading Plus</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/SymphonyMath'>Symphony Math</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/RedboxVR'>RedboxVR</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/Testimonials'>Testimonials</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='navBarLink'
              title='Company'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item>
                <Link to='/AboutUs'>About Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/Team'>Team</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/WhereWeReach'>Where We Reach</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navBarLink'>
              <Link to='/Contact'>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
