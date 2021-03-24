import React from 'react';
import Card from 'react-bootstrap/Card';
import { RedirectButton } from '../../Buttons/Buttons';

const DivTwo = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='./assets/images/readingPlusLogo.png' />
        <Card.Body>
          <Card.Title>Reading Plus</Card.Title>
          <Card.Text>
            The Reading Plus program focuses on improving and changing the way
            students read. Reading Plus targets Silent Reading Skills, Fluency,
            Comprehension, Academic Vocabulary, College-Career Readiness Skills
            and Writing. Reading Plus is web-based and can be use 24/7 from
            anywhere at anytime.
          </Card.Text>
          <RedirectButton url={'/ReadingPlus'} title={'Learn More'} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default DivTwo;
