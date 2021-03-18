import React from 'react';
import './style.css';
// DIVS
import DivOne from './DivOne/DivOne';
import DivTwo from './DivTwo/DivTwo';
import DivThree from './DivThree/DivThree';
//Main Paragraph
import MainParagraph from './MainParagraph/MainParagraph';
import { RedirectButton } from '../Buttons/Buttons';

const Main = () => {
  const centerLine = {
    borderRight: '0.0625rem solid',
    borderRightColor: '#f97c05',
    paddingRight: '1.875rem',
    borderLeft: '0.0625rem solid',
    borderLeftColor: '#f97c05',
    paddingLeft: '1.875rem',
  };

  return (
    <>
      <div>
        <MainParagraph />
      </div>

      <div className='row threeContainers'>
        {/* SYMPHONY MATH */}
        <div className='col-sm-4 containerOne'>
          <DivOne />
          <RedirectButton url={'/SymphonyMath'} title={'Learn More'} />
        </div>

        {/* READING PLUS DIV */}
        <div
          style={centerLine}
          className='col-sm-4 containerTwo'
        >
          <DivTwo />
          <RedirectButton url={'/ReadingPlus'} title={'Learn More'} />
        </div>

        {/* REDBOXVR */}
        <div className='col-sm-4 containerThree'>
          <DivThree />
          <RedirectButton url={'/RedboxVR'} title={'Learn More'} />
        </div>
        <hr className='container testimonial' />
      </div>
    </>
  );
};

export default Main;
