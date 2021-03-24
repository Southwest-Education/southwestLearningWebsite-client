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
    <div>
      <MainParagraph />
      <div className='mt-5 container'>
        <div className='row products'>
          {/* SYMPHONY MATH */}
          <DivOne />
          {/* READING PLUS */}
          <DivTwo />
          {/* REDBOXVR */}
          <DivThree />
        </div>
        {/* <hr className='container testimonial' /> */}
      </div>
    </div>
  );
};

export default Main;
