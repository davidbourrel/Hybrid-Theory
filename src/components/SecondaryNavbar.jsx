import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { ChevronDown } from '../assets/svg/ChevronDown';
import '../styles/secondaryNavbar.css';

export const SecondaryNavbar = ({ data }) => {
  return (
    <nav>
      <Accordion defaultActiveKey='1'>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey='0'
            className='pointer userSelect'
          >
            <ChevronDown />
            <span className='mx-2'>Menu</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <ul className='removeStyle'>
              <Card.Body>
                {data.map((link) => {
                  return (
                    <li key={link} className='underline removeStyle'>
                      {link}
                    </li>
                  );
                })}
              </Card.Body>
            </ul>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </nav>
  );
};
