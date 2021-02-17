import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const SentMessage = () => {
  return (
    <div className="container sentMessageDiv">
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Message Successfully sent!</Card.Title>
          <Card.Text>
            Thank you, We apprieciate you and one of your sale respresentatives
            will be in contact with you very shortly!
          </Card.Text>
          <Link to="/">
            <button variant="primary">Go Home</button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};

export default SentMessage;
