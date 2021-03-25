import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const ReadingPlusTestimonialTwo = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='100%'
        height='50vh'
        url='https://youtu.be/MinU9D2Mz1U'
      />
    </div>
  );
};

export default ReadingPlusTestimonialTwo;
