import React from 'react';
import './style.css';

// BUTTONS
import ReadingPlusBtnLogin from '../../../Buttons/ReadingPlusButton/ReadingPlusBtnLogin';
import ReadingPlusBtnLearnMore from '../../../Buttons/ReadingPlusButton/ReadingPlusBtnLearnMore';
// DIVS
import ReadingPlusVideoDiv from './ReadingPlusVideoDiv/ReadingPlusVideoDiv';
import HowItWorksDiv from './HowItWorksDiv/HowItWorksDiv';
// IMAGES
import ReadingPlusImage from '../../../Images/ReadingPlus/ReadingPlusImage';

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
        <ReadingPlusBtnLearnMore />
        <ReadingPlusBtnLogin />
      </div>
    </div>
  );
};

export default ReadingPlus;
