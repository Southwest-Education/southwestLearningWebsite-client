import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const RedboxVRTestimonialOne = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='34.375rem'
        height='21.875rem'
        url='https://youtu.be/n29VQwW-03o'
      />
    </div>
  );
};

export default RedboxVRTestimonialOne;
