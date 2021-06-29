import React from 'react';
import { Navigation } from '../components/Navigation';
import { Forum } from '../components/Forum';
import { Container } from 'react-bootstrap';

export const CollaborationForum = () => {
  return (
    <Container fluid>
      <Navigation />
      <h1 className='text-center text-primary my-3 fw-bold'>
        What I am looking for
      </h1>
      <Forum />
    </Container>
  );
};
