import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const SymphonyMathTestimonialOne = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='550px'
        height='350px'
        url='https://vimeo.com/55886592'
      />
    </div>
  );
};

export default SymphonyMathTestimonialOne;
