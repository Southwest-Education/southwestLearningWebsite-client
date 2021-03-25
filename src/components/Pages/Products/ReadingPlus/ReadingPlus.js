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
        <div className="col-sm-4"></div>
        <div className='col-sm-4 readingPlusVideo'>
          <ReadingPlusVideoDiv />
        </div>
        <div className="col-sm-4"></div>
      </div>

      <div className=''>
        <HowItWorksDiv />
      </div>
      <div className='btnDiv'>
        <RedirectButton
          url={'https://login.readingplus.com/'}
          title={'Login'}
        />
        <RedirectButton url={'/Contact'} title={'Contact'} />
      </div>
      <hr className='container testimonial' />
    </div>
  );
};

export default ReadingPlus;
