import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const SymphonyMathTestimonialOne = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='100%'
        height='50vh'
        url='https://vimeo.com/55886592'
      />
    </div>
  );
};

export default SymphonyMathTestimonialOne;
