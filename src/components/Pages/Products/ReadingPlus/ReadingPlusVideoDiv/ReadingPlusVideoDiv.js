import React from 'react';
import ReactPlayer from 'react-player';

const ReadingPlusVideoDiv = () => {
  return (
    <div>
      <ReactPlayer
        url='https://youtu.be/44PiVDPtW7A'
        controls={true}
        width='67%'
        height='50vh'
      />
    </div>
  );
};

export default ReadingPlusVideoDiv;
