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
      <Header />
      <DivOneText />
      <SubHeader />
      <DivOneText2 />
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
            <RedirectButton url={'/Contact'} title={'Contact'} />
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
