import React from 'react';
import './style.css';
// DIVS
import ReadingPlusVideoDiv from './ReadingPlusVideoDiv/ReadingPlusVideoDiv';
import HowItWorksDiv from './HowItWorksDiv/HowItWorksDiv';
// IMAGES
import ReadingPlusImage from '../../../Images/ReadingPlus/ReadingPlusImage';
import { RedirectButton } from '../../../Buttons/Buttons';

const ReadingPlus = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-12'>
          <ReadingPlusImage />
        </div>
      </div>
      <div className='row'>
        <div className='container mt-2 readingPlusVideo'>
          <ReadingPlusVideoDiv />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 text-black text-center mt-1'>
          <HowItWorksDiv />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 d-flex justify-content-center'>
          <RedirectButton
            url={'https://login.readingplus.com/'}
            title={'Login'}
          />
        </div>
        <div className='col-sm-6 d-flex justify-content-center'>
          {' '}
          <RedirectButton url={'/Contact'} title={'Contact'} />
        </div>
      </div>
    </div>
  );
};

export default ReadingPlus;
