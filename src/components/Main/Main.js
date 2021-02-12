import React from 'react';
import './style.css';
// BUTTONS
import SymphonyMathBtnRoute from '../Buttons/SymphonyMath/SymphonyMathBtnRoute';
import ReadingPlusBtnRoute from '../Buttons/ReadingPlusButton/ReadingPlusBtnRoute';
import RedBoxVRBtnRoute from '../Buttons/RedBoxVRButton/RedBoxVRBtnRoute';
// DIVS
import DivOne from './DivOne/DivOne';
import DivTwo from './DivTwo/DivTwo';
import DivThree from './DivThree/DivThree';
//Main Paragraph
import MainParagraph from './MainParagraph/MainParagraph';

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
        <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 containerOne'>
          <DivOne />
          <SymphonyMathBtnRoute />
        </div>

        {/* READING PLUS DIV */}
        <div
          style={centerLine}
          className='col-sm-4 col-md-4 col-lg-4 col-xl-4 containerTwo'
        >
          <DivTwo />
          <ReadingPlusBtnRoute />
        </div>

        {/* REDBOXVR */}
        <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 containerThree'>
          <DivThree />
          <RedBoxVRBtnRoute />
        </div>
        <hr className='container testimonial' />
      </div>
    </>
  );
};

export default Main;
