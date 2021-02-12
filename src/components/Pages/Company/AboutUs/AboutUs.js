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
      <ParagraphOne />
      <ParagraphTwo />
      <ParagraphThree />
      <ParagraphFour />
      <hr className='container testimonial' />
    </div>
  );
};

export default AboutUs;
