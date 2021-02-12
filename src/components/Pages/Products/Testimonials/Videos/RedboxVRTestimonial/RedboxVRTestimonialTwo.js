import React from 'react';
import './style.css';
import ReactPlayer from 'react-player';

const RedboxVRTestimonialTwo = () => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        width='550px'
        height='350px'
        url='https://youtu.be/EXYzj6qwCCk'
      />
    </div>
  );
};

export default RedboxVRTestimonialTwo;
