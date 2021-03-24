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
      <div className='container'>
        <div className='row'>
          {/* SYMPHONY MATH */}
          <DivOne />
          {/* READING PLUS DIV */}
          <DivTwo />
          {/* REDBOXVR */}
          <DivThree />
        </div>
        <hr className='container testimonial' />
      </div>
    </>
  );
};

export default Main;
