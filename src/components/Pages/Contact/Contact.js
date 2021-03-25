import React from 'react';
import { ContactFormFields } from '../../Forms/FormFields';
import './style.css';

const Contact = () => {
  const textStyle = {
    color: '#232323',
    textAlign: 'center',
    fontWeight: 'bold',
    textStyleType: 'none',
    width: '75%',
    margin: '0 auto',
  };

  return (
    <div>
      <div className='row'>
        {/* LEFT SIDE */}
        <div className='col-xs-6 col-sm-6'>
          <h1 className='contactHeader'>Contact For More Information</h1>
          <ContactFormFields url={'/api/form'} />
        </div>

        {/* RIGHT SIDE */}
        <div className='col-xs-6 col-sm-6'>
          <h1 className='contactHeader'>Address:</h1>
          <a href='https://www.google.com/maps/place/1614+US-281,+Marble+Falls,+TX+78654/@30.5872286,-98.2759144,17z/data=!3m1!4b1!4m5!3m4!1s0x865b1d0285ae51ef:0x905c3a738fb8eed9!8m2!3d30.5872286!4d-98.2737257'>
            <h3 hr style={textStyle}>
              1614 US-281 Suite B, Marble Falls, TX 78654
            </h3>
          </a>
          <h1 className='subHeader'>Number / Fax</h1>
          <ul style={textStyle}>
            <li>Office: (830)-798-2142</li>
            <li>Toll: (866)-472-6949</li>
            <li>Fax: (830)-693-4169</li>
          </ul>
          <h1 className='subHeader'>Social Media</h1>
          <ul>
            <a
              style={textStyle}
              href='https://www.linkedin.com/company/southwest-education-inc/about/'
            >
              <li>LinkedIn</li>
            </a>
            <a style={textStyle} href='https://twitter.com/SouthwestEduca1'>
              <li>Twitter</li>
            </a>
            <a style={textStyle} href='/'>
              <li>FaceBook</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
