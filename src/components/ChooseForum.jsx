import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/chooseForum.css';

export const ChooseForum = () => {
  return (
    <Container fluid>
      <Row className='forumpage'>
        <Col className='side1' md>
          <Link to='/collaboration-forum'>
            <h2>What I am looking for</h2>
          </Link>
        </Col>
        <Col className='side2' md>
          <Link to='/proposal-forum'>
            <h2>What I will be able to do</h2>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
