import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const ReadingPlusTestimonialOne = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='100%'
        height='50vh'
        url='https://youtu.be/abpYxkwjP9w'
      />
    </div>
  );
};

export default ReadingPlusTestimonialOne;
