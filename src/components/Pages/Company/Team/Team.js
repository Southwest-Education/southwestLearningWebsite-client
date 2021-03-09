import React from 'react';
import './style.css';
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpenText,
  faPhoneVolume,
} from '@fortawesome/pro-duotone-svg-icons';
// IMAGES
import KevinImage from '../../../Images/Team/KevinImage';
import BeccaImage from '../../../Images/Team/BeccaImage';
import DebbieImage from '../../../Images/Team/DebbieImage';

const Team = () => {
  return (
    <div>
      <div>
        <h1 className='teamTitle'>Our Sales Team</h1>
      </div>
      <div className='container'>
        <div className='row'>
          {/* KEVIN */}
          <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
            <h4 className='title'>Kevin Sheridan - Utah</h4>
            <div className='box'>
              <div className='box-img'>
                <KevinImage />
              </div>
              <div className='box-content'>
                <p className='description'>
                  Kevin has enjoyed working with schools throughout Utah and
                  Texas since 2008. He graduated from the University of Utah
                  with a BA in Spanish and Comparative Literature/Culture
                  Studies. When not busy supporting schools, Kevin enjoys
                  spending time with his family, reading, and playing
                  pickleball.
                </p>
                <ul className='social-links'>
                  <li>
                    <a href={REACT_APP_KEVIN_EMAIL}>
                      <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    </a>
                  </li>
                  <li>
                    <a href='tel:8013900714'>
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* BECCA */}
          <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
            <h4 className='title'>Becca Camarillo - Texas</h4>
            <div className='box'>
              <div className='box-img'>
                <BeccaImage />
              </div>
              <div className='box-content'>
                <p className='description'>
                  Becca has had the privilege of being a teacher in Texas
                  schools for 13 years. She has taught both primary and
                  secondary grades ELA and Social Studies. Becca has also
                  written curriculum that was shared and used by her school and
                  district colleagues. Becca has worked for Southwest Education
                  for several years. I am a wife, a mother to three, an avid
                  reader, and a lover of country music!
                </p>
                <ul className='social-links'>
                  <li>
                    <a href={REACT_APP_BECCA_EMAIL}>
                      <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    </a>
                  </li>
                  <li>
                    <a href='tel:8303855643'>
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DEBBIE */}
          <div className='col-sm-6 col-md-4' style={{ padding: 20 }}>
            <h4 className='title'>Debbie Netardus - Texas</h4>
            <div className='box'>
              <div className='box-img'>
                <DebbieImage />
              </div>
              <div className='box-content'>
                <p className='description'>
                  Debbie Netardus is a retired ELAR teacher from Jourdanton,
                  Texas. She taught at Jourdanton Junior High for 28 years
                  before retiring in 2018 and joining the Southwest Education,
                  Inc. team in mid 2018. Debbie currently serve as a sales
                  consultant and trainer for our online educational programs in
                  TEA Regions. In her free time, she loves to read and
                  cross-stitch, as well as spend time and travel with family and
                  friends.
                </p>
                <ul className='social-links'>
                  <li>
                    <a href={REACT_APP_DEBBIE_EMAIL}>
                      <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    </a>
                  </li>
                  <li>
                    <a href='tel:8304800885'>
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='container testimonial' />
    </div>
  );
};

export default Team;
