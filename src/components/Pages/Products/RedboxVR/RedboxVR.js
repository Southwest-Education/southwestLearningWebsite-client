import React from 'react';
import './style.css';
// HEADER
import Header from './Header/Header';
// SUBHEADER
import SubHeader from './SubHeader/SubHeader';
//DIVS
import DivOneText from './DivOneText/DivOneText';
import DivOneText2 from './DivOneText2/DivOneText2';
// IMAGES
import RedBoxLogo from '../../../Images/RedBox/RedBoxLogo';
import MelLogo from '../../../Images/RedBox/MelLogo';

import { RedirectButton } from '../../../Buttons/Buttons';

const RedboxVR = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-12'>
          <Header />
        </div>
        <div className='col-sm-12'>
          <DivOneText />
        </div>
        <div className='col-sm-12'>
          <SubHeader />
        </div>
        <div className='col-sm-12'>
          <DivOneText2 />
        </div>
      </div>

      <div className='row'>
        <div className='col-4'>
          <RedBoxLogo className='img-fluid divOneVR' />
        </div>

        <div className='col-4'>
          <div className='btnDiv'>
            <RedirectButton
              url={'https://redboxvr.co.uk/'}
              title={'Learn More'}
            />
            <div className='col-3'>
              <RedirectButton url={'/Contact'} title={'Contact'} />
            </div>
          </div>
        </div>

        <div className='col-4'>
          <MelLogo className='img-fluid divOneVR melLogo' />
        </div>
      </div>
      <hr className='container testimonial' />
    </div>
  );
};

export default RedboxVR;
