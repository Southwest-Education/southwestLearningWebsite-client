import React from 'react';
import { Link } from 'react-router-dom';
import './stlye.css';

const MainTitle = () => {
  return (
    <div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className='mainTitle'>Southwest Education</h1>
        <br />
        <h3 className='mainSubTitle'>
          Research-based, Results-Proven Programs for Elementary, Secondary and
          College/Adult Education Students
        </h3>
        <hr className='container' />
      </Link>
    </div>
  );
};

export default MainTitle;
