import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';
// HEADER
import Header from './Header/Header';
//SUBHEADERS
import SubHeader1 from './DivSubHeader/SubHeader1';
import SubHeader2 from './DivSubHeader/SubHeader2';
// DIVS
import DivOneText from './DivOneText/DivOneText';
import DivOneText2 from './DivOneText2/DivOneText2';

import { RedirectButton } from '../../../Buttons/Buttons';

const SymphonyMath = () => {
  const centerLine = {
    borderRight: '0.1875rem solid',
    borderRightColor: '#f97c05',
  };
  return (
    <div>
      <div>
        <Header />
        <DivOneText />
        <div className='row divOneS'>
          <div style={centerLine} className='col-6'>
            <SubHeader1 />
            <DivOneText2 />
            {/* BUTTONS */}
            <div className='btnDiv'>
              <RedirectButton
                url={
                  'https://content.symphonylearning.com/assets/student/index.html?v=latest'
                }
                title={'Login'}
              />
              <RedirectButton url={'/Contact'} title={'Contact'} />
            </div>
          </div>
          <div className='col-6'>
            <SubHeader2 />
            <div className='symphonyMathVideo'>
              <ReactPlayer
                url='https://youtu.be/24WOuguyUlc'
                controls={true}
                width='67%'
                height='35vh'
              />
            </div>
          </div>
        </div>
      </div>
      <hr className='container testimonial' />
    </div>
  );
};

export default SymphonyMath;
