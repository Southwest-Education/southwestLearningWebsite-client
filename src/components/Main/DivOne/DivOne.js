import React from 'react';
import Card from 'react-bootstrap/Card';
import { RedirectButton } from '../../Buttons/Buttons';

const DivOne = () => {
  return (
    <div>
      <Card className='cardData'>
        <Card.Img
          variant='top'
          src='./assets/images/symphonyMath.png'
          width='286px'
          height='110px'
        />
        <Card.Body>
          <Card.Title className='cardTitle'>Symphony Math</Card.Title>
          <Card.Text className='cardInfo'>
            Many students struggle with math because they rely on arbitrary
            memorization techniques to answer specific questions. With this
            approach, students do not gain a substantive understanding of
            fundamentals and simply cannot adjust to more sophisticated problem
            solving. With Symphony Math®, these problems are resolved.
          </Card.Text>
          <RedirectButton url={'/SymphonyMath'} title={'Learn More'} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default DivOne;
