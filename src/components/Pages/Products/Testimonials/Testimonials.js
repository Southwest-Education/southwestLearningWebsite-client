import React from 'react';
import ReadingPlusParagraphOne from './Paragraph/ReadingPlusParagraph/ReadingPlusParagraphOne';
import './style.css';
import ReadingPlusTestimonialOne from './Videos/ReadingPlusTestimonial/ReadingPlusTestimonialOne';
import ReadingPlusTestimonialTwo from './Videos/ReadingPlusTestimonial/ReadingPlusTestimonialTwo';
const Testimonials = () => {
  return (
    <div>
      <div className='row'>
          <div className="col-12">
              <h1 className='testimonialsTitle'>Testimonials</h1>
          </div>
          <div className="col-12">
              <h3 className='testimonialsSubTitle'>Reading Plus</h3>
          </div>
        <div className='col-6'>
          <ReadingPlusTestimonialOne />
          <ReadingPlusParagraphOne />
        </div>
        <div className='col-6'>
          <ReadingPlusTestimonialTwo />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
