import React from 'react';
import Card from 'react-bootstrap/Card';
import { RedirectButton } from '../../Buttons/Buttons';

const DivTwo = () => {
  return (
    <div>
      <Card className='pt-4 cardData'>
        <Card.Img
          variant='top'
          src='./assets/images/readingPlusLogo.png'
          width='286px'
          height='110px'
        />
        <Card.Body>
          <Card.Title className='cardTitle'>Reading Plus</Card.Title>
          <Card.Text className='cardInfo pb-4'>
            The Reading Plus program focuses on improving and changing the way
            students read. Reading Plus targets Silent Reading Skills, Fluency,
            Comprehension, Academic Vocabulary, College-Career Readiness Skills
            and Writing. Reading Plus is web-based and can be used 24/7 from
            anywhere at anytime.
          </Card.Text>
          <div className='cardButton'>
            <RedirectButton url={'/ReadingPlus'} title={'Learn More'} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DivTwo;
