import React from 'react';
import { Accordion, Card, Row } from 'react-bootstrap';
import { ChevronDown } from '../assets/svg/ChevronDown';
import '../styles/secondaryNavbar.css';

export const SecondaryNavbar = ({ data }) => {
  return (
    <nav>
      <Accordion defaultActiveKey='0' className='pointer'>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <ChevronDown />
            <span className='mx-2'>Menu</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              {data.map((link) => {
                return <Row key={link}>{link}</Row>;
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </nav>
  );
};
