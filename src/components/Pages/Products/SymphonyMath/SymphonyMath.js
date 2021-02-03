import React from 'react';
import './style.css';
import VideoLooper from 'react-video-looper';

// BUTTONS
import SymphonyMathBtnLearnMore from '../../../Buttons/SymphonyMath/SymphonyMathBtnLearnMore';
import SymphonyMathBtnLogin from '../../../Buttons/SymphonyMath/SymphonyMathBtnLogin';
// HEADER
import Header from './Header/Header';
//SUBHEADERS
import SubHeader1 from './DivSubHeader/SubHeader1';
import SubHeader2 from './DivSubHeader/SubHeader2';
// DIVS
import DivOneText from './DivOneText/DivOneText';
import DivOneText2 from './DivOneText2/DivOneText2';

const SymphonyMath = () => {
  const centerLine = {
    borderRight: '0.1875rem solid',
    borderRightColor: '#f97c05',
  };
  return (
    <div>
      <div>
        <Header />
        <DivOneText />
        <div className='row divOneS'>
          <div style={centerLine} className='col-6'>
            <SubHeader1 />
            <DivOneText2 />
            {/* BUTTONS */}
            <div className='btnDiv'>
              <SymphonyMathBtnLearnMore />
              <SymphonyMathBtnLogin />
            </div>
          </div>
          <div className='col-6'>
            <SubHeader2 />
            <div className='symphonyMathVideo'>
              <VideoLooper
                source='/assets/videos/symphonyMathOverview.mp4'
                autoplay={false}
                width='67%'
                height='35vh'
                start={0.0}
                end={205.0}
                muted={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymphonyMath;
