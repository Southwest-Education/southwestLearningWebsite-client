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
      <ReadingPlusImage />
      <div className='readingPlusVideo'>
        <ReadingPlusVideoDiv />
      </div>

      <div className='howItWorksDiv'>
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
