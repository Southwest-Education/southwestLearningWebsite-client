import React from 'react';
import './style.css';
// HEADER
import Header from './Header/Header';
// SUBHEADER
import SubHeader from './SubHeader/SubHeader';
//DIVS
import DivOneText from './DivOneText/DivOneText';
import DivOneText2 from './DivOneText2/DivOneText2';

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

      <div className='row '>
        <div className='col-sm-12 vrRowTwo'>
          <RedirectButton
            url={'https://redboxvr.co.uk/'}
            title={'Learn More'}
          />
          <div className='row'>
            <div className='col-sm-12'>
              <RedirectButton url={'/Contact'} title={'Contact'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedboxVR;
