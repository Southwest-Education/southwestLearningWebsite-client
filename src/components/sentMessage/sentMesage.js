import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const SentMesage = () => {
  return (
    <div>
      <Card className='text-center'>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link to='/'>
            <button variant='primary'>Go Home</button>
          </Link>
        </Card.Body>
        <Card.Footer className='text-muted'>2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default SentMesage;