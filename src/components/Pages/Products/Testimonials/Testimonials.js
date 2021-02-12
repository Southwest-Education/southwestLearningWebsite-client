import React from 'react';
import './style.css';
// PARAGRAPHS
import ReadingPlusParagraphOne from './Paragraph/ReadingPlusParagraph/ReadingPlusParagraphOne';
import ReadingPlusParagraphTwo from './Paragraph/ReadingPlusParagraph/ReadingPlusParagraphTwo';

import SymponyMathParagraphOne from './Paragraph/SymponyMathParagraph/SymponyMathParagraphOne';
import SymponyMathParagraphTwo  from './Paragraph/SymponyMathParagraph/SymponyMathParagraphTwo';

import RedboxVRParagraphOne from './Paragraph/RedboxVRParagraph/RedboxVRParagraphOne';
import RedboxVRParagraphTwo from './Paragraph/RedboxVRParagraph/RedboxVRParagraphTwo';

// VIDEOS
import ReadingPlusTestimonialOne from './Videos/ReadingPlusTestimonial/ReadingPlusTestimonialOne';
import ReadingPlusTestimonialTwo from './Videos/ReadingPlusTestimonial/ReadingPlusTestimonialTwo';

import SymphonyMathTestimonialOne from './Videos/SymphonyMathTestimonial/SymphonyMathTestimonialOne';
import SymphonyMathTestimonialTwo from './Videos/SymphonyMathTestimonial/SymphonyMathTestimonialTwo';

import RedboxVRTestimonialOne from './Videos/RedboxVRTestimonial/RedboxVRTestimonialOne';
import RedboxVRTestimonialTwo from './Videos/RedboxVRTestimonial/RedboxVRTestimonialTwo';




const Testimonials = () => {

  return (
    <div className='container' >
      <div className='row'>
          <div className="col-12">
              <h1 className='testimonialsTitle'>Testimonials</h1>
          </div>
          {/* READING PLUS */}
          <div className="col-12">
              <h3 className='testimonialsSubTitle'>Reading Plus</h3>
          </div>
        <div className='col-6'>
          <ReadingPlusTestimonialOne />
          <ReadingPlusParagraphOne />
        </div>
        <div className='col-6'>
          <ReadingPlusTestimonialTwo />
          <ReadingPlusParagraphTwo />
        </div>
        <hr className='container testimonial' />
      </div>

      <div className='row'>
          {/* SYMPHONY MATH */}
          <div className="col-12">
              <h3 className='testimonialsSubTitle'>Symphony Math</h3>
          </div>
        <div className='col-6'>
          <SymphonyMathTestimonialOne/>
          <SymponyMathParagraphOne />
        </div>
        <div className='col-6'>
          <SymphonyMathTestimonialTwo />
          <SymponyMathParagraphTwo />
        </div>
      </div>
      <hr className='container testimonial' />


      <div className='row'>
          {/* RedboxVR */}
          <div className="col-12">
              <h3 className='testimonialsSubTitle'>Redbox VR</h3>
          </div>
        <div className='col-6'>
          <RedboxVRTestimonialOne/>
          <RedboxVRParagraphOne />
        </div>
        <div className='col-6'>
          <RedboxVRTestimonialTwo />
          <RedboxVRParagraphTwo />
        </div>
      </div>
      <hr className='container testimonial' />
    </div>

    
  );
};

export default Testimonials;
