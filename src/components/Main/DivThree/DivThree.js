import React from 'react';
import Card from 'react-bootstrap/Card';
import { RedirectButton } from '../../Buttons/Buttons';

const DivThree = () => {
  return (
    <div>
      <Card className='pt-4 cardData'>
        <Card.Img
          variant='top'
          src='./assets/images/rbvr-logo-250x96.png'
          width='286px'
          height='110px'
        />
        <Card.Body>
          <Card.Title className='cardTitle'>Redbox VR</Card.Title>
          <Card.Text className='cardInfo'>
            Great teaching has always been the secret to opening the eyes and
            minds of students, but with the introduction of Google Expeditions,
            we really are looking at a game changer when it comes to
            learning. Imagine being able to transport students to some of the
            most fascinating and inspiring destinations without ever leaving the
            classroom.
          </Card.Text>
          <div className='cardButton'>
            <RedirectButton url={'/RedboxVR'} title={'Learn More'} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DivThree;
