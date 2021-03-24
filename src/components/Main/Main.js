import React from 'react';
import './style.css';
// DIVS
import DivOne from './DivOne/DivOne';
import DivTwo from './DivTwo/DivTwo';
import DivThree from './DivThree/DivThree';
//Main Paragraph
import MainParagraph from './MainParagraph/MainParagraph';
const Main = () => {
  return (
    <>
      <div>
        <MainParagraph />
      </div>
      <div className='mt-5 container'>
        <div className='row'>
          <div className='col-4'>
            {/* SYMPHONY MATH */}
            <DivOne />
          </div>
          <div className='col-4'>
            {/* READING PLUS */}
            <DivTwo />
          </div>
          <div className='col-4'>
            {/* REDBOXVR */}
            <DivThree />
          </div>
        </div>
        <hr className='container testimonial' />
      </div>
    </>
  );
};

export default Main;
