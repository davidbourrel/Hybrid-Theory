import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css';

export const Home = () => {
  return (
    <>
      <Container fluid className='logo-bg'>
        <Row className='page'>
          <Col className='left' md>
            <Link to='/select-category'>
              <p className=''>I am new ! Let me in !</p>
            </Link>
          </Col>
          <Col className='right' md>
            <Link to='/sign-in'>
              <p>Already have an account ?</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
