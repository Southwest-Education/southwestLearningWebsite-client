import React from 'react';
import ReadingPlusParagraphOne from './Paragraph/ReadingPlusParagraph/ReadingPlusParagraphOne';
import ReadingPlusParagraphTwo from './Paragraph/ReadingPlusParagraph/ReadingPlusParagraphTwo';
import './style.css';
import ReadingPlusTestimonialOne from './Videos/ReadingPlusTestimonial/ReadingPlusTestimonialOne';
import ReadingPlusTestimonialTwo from './Videos/ReadingPlusTestimonial/ReadingPlusTestimonialTwo';
import SymphonyMathTestimonialOne from './Videos/SymphonyMathTestimonial/SymphonyMathTestimonialOne';

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
      </div>

      <div className='row'>
          {/* SYMPHONY MATH */}
          <div className="col-12">
              <h1 className='testimonialsTitle'>Testimonials</h1>
          </div>
          <div className="col-12">
              <h3 className='testimonialsSubTitle'>Reading Plus</h3>
          </div>
        <div className='col-6'>
          <SymphonyMathTestimonialOne/>
          <ReadingPlusParagraphOne />
        </div>
        <div className='col-6'>
          <ReadingPlusTestimonialTwo />
          <ReadingPlusParagraphTwo />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
