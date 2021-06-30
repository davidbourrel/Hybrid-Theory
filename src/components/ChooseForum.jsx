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
            <h2>I'm looking for a collaboration</h2>
            <span>Finding people to collaborate for your project !</span>
          </Link>
        </Col>
        <Col className='side2' md>
          <Link to='/proposal-forum'>
            <h2>I can offer my services</h2>
            <span>What I will be able to do !</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
