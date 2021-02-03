import React from 'react';
import VideoLooper from 'react-video-looper';

const ReadingPlusVideoDiv = () => {
  return (
    <div>
      <VideoLooper
        source='/assets/videos/readingPlusVideo.mov'
        autoplay={true}
        width='67%'
        height='50vh'
        start={0.0}
        end={59.0}
      />
    </div>
  );
};

export default ReadingPlusVideoDiv;
