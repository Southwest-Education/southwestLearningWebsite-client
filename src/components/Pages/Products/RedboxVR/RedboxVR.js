import React from 'react';
import './style.css';
//BUTTONS
import RedboxVrBtnLearnMore from '../../../Buttons/RedBoxVRButton/RedboxVrBtnLearnMore';
import ContactButton from '../../../Buttons/ContactButton/ContactButton';
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

const RedboxVR = () => {
  return (
    <div>
      <Header />
      <DivOneText />
      <SubHeader />
      <DivOneText2 />
      <div className='row'>
        <div className='col-4'>
          <RedBoxLogo className='img-fluid divOneVR'/>
        </div>

        <div className='col-4'>
          <div className='btnDiv'>
            <RedboxVrBtnLearnMore />
            <ContactButton />
          </div>
        </div>

        <div className='col-4'>
          <MelLogo className='img-fluid divOneVR melLogo' />
        </div>
      </div>
    </div>
  );
};

export default RedboxVR;
