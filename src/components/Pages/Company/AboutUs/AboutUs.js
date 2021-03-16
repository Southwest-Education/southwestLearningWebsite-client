import React from 'react';
import ParagraphFour from './Paragraphs/ParagraphFour';
import ParagraphOne from './Paragraphs/ParagraphOne';
import ParagraphThree from './Paragraphs/ParagraphThree';
import ParagraphTwo from './Paragraphs/ParagraphTwo';
import './style.css';

const AboutUs = () => {
  return (
    <div>
      <h1 className='aboutUsHeader'>Company History:</h1>
      
      <div className='row'>
        <div className='col-sm-6'>
          <ParagraphOne />
        </div>
        <div className='col-sm-6'>
          <ParagraphThree />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6'>
          <ParagraphTwo />
        </div>
        <div className='col-sm-6'>
          <ParagraphFour />
        </div>
      </div>

      <hr className='container testimonial' />
    </div>
  );
};

export default AboutUs;
