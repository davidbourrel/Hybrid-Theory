import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import business from '../assets/images/categories/business.jpg';
import data from '../assets/images/categories/data.jpg';
import digitalMarketing from '../assets/images/categories/digital-marketing.jpg';
import graphicsDesign from '../assets/images/categories/graphics-design.jpg';
import lifestyle from '../assets/images/categories/lifestyle.jpg';
import music from '../assets/images/categories/music.jpg';
import programming from '../assets/images/categories/programming.jpg';
import video from '../assets/images/categories/video.jpg';
import translation from '../assets/images/categories/translation.jpg';
import '../styles/cardCategories.css';

export const CardCategories = () => {
  return (
    <Row>
      <Col md>
        <Card className='shadow cardStyle'>
          <Card.Img variant='top' src={business} className='imageStyle' />
          <Card.Body>
            <Card.Title>Business</Card.Title>
            <Link to='business'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={data} className='imageStyle' />
          <Card.Body>
            <Card.Title>Data</Card.Title>
            <Link to='data'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img
            variant='top'
            src={digitalMarketing}
            className='imageStyle'
          />
          <Card.Body>
            <Card.Title>Digital Marketing</Card.Title>
            <Link to='digital-marketing'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={graphicsDesign} className='imageStyle' />
          <Card.Body>
            <Card.Title>Graphics & Design</Card.Title>
            <Link to='graphics-design'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={lifestyle} className='imageStyle' />
          <Card.Body>
            <Card.Title>Lifestyle</Card.Title>
            <Link to='lifestyle'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={music} className='imageStyle' />
          <Card.Body>
            <Card.Title>Music & Audio</Card.Title>
            <Link to='music-audio'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={programming} className='imageStyle' />
          <Card.Body>
            <Card.Title>Programming & Tech</Card.Title>
            <Link to='programming'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={video} className='imageStyle' />
          <Card.Body>
            <Card.Title>Video & Animation</Card.Title>
            <Link to='video-animation'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md>
        <Card className='shadow cardStyle '>
          <Card.Img variant='top' src={translation} className='imageStyle' />
          <Card.Body>
            <Card.Title>Writing & Translation</Card.Title>
            <Link to='writing-translation'>
              <Button variant='primary' className='w-100 fw-bold text-white'>
                Enter
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
