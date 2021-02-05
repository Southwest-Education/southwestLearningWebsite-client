import React from 'react';
import './style.css';
//BUTTONS
import RedboxVrBtnLearnMore from '../../../Buttons/RedBoxVRButton/RedboxVrBtnLearnMore';
//DIVS
import DivOneText from './DivOneText/DivOneText';
import DivOneText2 from './DivOneText2/DivOneText2';
// IMAGES
import RedBoxLogo from '../../../Images/RedBox/RedBoxLogo';
import MelLogo from '../../../Images/RedBox/MelLogo';

const RedboxVR = () => {
  return (
    <div>
      <DivOneText />
      <h3 className='divOneSubHeader'>​About RedboxVR Kits:</h3>
      <DivOneText2 />
      <div className='row'>
        <div className='col-4'>
          <RedBoxLogo className='img-fluid divOneVR'/>
        </div>

        <div className='col-4'>
          <div className='btnDiv'>
            <RedboxVrBtnLearnMore />
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
