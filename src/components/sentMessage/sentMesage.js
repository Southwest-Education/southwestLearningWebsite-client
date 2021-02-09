import React from 'react';
import { Card } from 'react-bootstrap';

const sentMesage = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Message Sent</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default sentMesage;
