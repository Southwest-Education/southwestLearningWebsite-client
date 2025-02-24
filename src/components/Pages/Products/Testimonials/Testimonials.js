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
          <div className="col-sm-12">
              <h1 className='testimonialsTitle text-center'>Testimonials</h1>
          </div>
          {/* READING PLUS */}
          <div className="col-sm-12">
              <h3 className='testimonialsSubTitle text-center'>Reading Plus</h3>
          </div>
        <div className='col-sm-6'>
          <ReadingPlusTestimonialOne />
          <ReadingPlusParagraphOne />
        </div>
        <div className='col-sm-6'>
          <ReadingPlusTestimonialTwo />
          <ReadingPlusParagraphTwo />
        </div>
      </div>

      <div className='row'>
          {/* SYMPHONY MATH */}
          <div className="col-sm-12">
              <h3 className='testimonialsSubTitle text-center'>Symphony Math</h3>
          </div>
        <div className='col-sm-6'>
          <SymphonyMathTestimonialOne/>
          <SymponyMathParagraphOne />
        </div>
        <div className='col-sm-6'>
          <SymphonyMathTestimonialTwo />
          <SymponyMathParagraphTwo />
        </div>
      </div>

      <div className='row'>
          {/* RedboxVR */}
          <div className="col-sm-12">
              <h3 className='testimonialsSubTitle text-center'>Redbox VR</h3>
          </div>
        <div className='col-sm-6'>
          <RedboxVRTestimonialOne/>
          <RedboxVRParagraphOne />
        </div>
        <div className='col-sm-6'>
          <RedboxVRTestimonialTwo />
          <RedboxVRParagraphTwo />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
