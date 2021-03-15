import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const ReadingPlusTestimonialOne = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='34.375rem'
        height='21.875rem'
        url='https://youtu.be/abpYxkwjP9w'
      />
    </div>
  );
};

export default ReadingPlusTestimonialOne;
