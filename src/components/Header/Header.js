import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { faChevronCircleDown } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import MainTitle from '../MainTitle/MainTitle';

const Header = () => {
  return (
    <div>
      <MainTitle />
      <nav role='navigation'>
        <div id='menuToggle'>
          <input type='checkbox' />

          <span></span>
          <span></span>
          <span></span>

          <ul id='menu'>
            <img
              className='companyLogo'
              src='/assets/images/southwestLogo.png'
              alt='southwestLogo'
            />
            <Link className='menuTitle' to='/'>
              <li>Home</li>
            </Link>
            <Dropdown>
              <Dropdown.Toggle className='menuTitle'>
                Products {'  '}
                <FontAwesomeIcon icon={faChevronCircleDown} />
              </Dropdown.Toggle>
              <Dropdown.Menu className='DropdownMenu'>
                <Dropdown.Item className='DropdownItems' href='/ReadingPlus'>
                  Reading Plus
                </Dropdown.Item>
                <Dropdown.Item className='DropdownItems' href='/SymphonyMath'>
                  Symphony Math
                </Dropdown.Item>
                <Dropdown.Item className='DropdownItems' href='/RedboxVR'>
                  RedboxVR
                </Dropdown.Item>
                <Dropdown.Item className='DropdownItems' href='/Testimonials'>
                  Testimonials
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className='menuTitle'>
                Company
                <FontAwesomeIcon icon={faChevronCircleDown} />
              </Dropdown.Toggle>

              <Dropdown.Menu className='DropdownMenu'>
                <Dropdown.Item className='DropdownItems' href='/AboutUs'>
                  About Us
                </Dropdown.Item>
                <Dropdown.Item className='DropdownItems' href='/Team'>
                  Team
                </Dropdown.Item>
                <Dropdown.Item className='DropdownItems' href='/WhereWeReach'>
                  Where We Reach
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link className='menuTitle' to='/Contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
