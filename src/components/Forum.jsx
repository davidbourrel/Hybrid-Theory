import { GrStatusGood, GrCircleQuestion } from 'react-icons/gr';
import { Button, Row, Col, ListGroup, Toast, Form } from 'react-bootstrap';
import '../styles/forum.css';

export const Forum = () => {
  const MessageData = [
    {
      title: 'Need help for making flat animation !',
      status: false,
      content:
        "I'd like a animation with simple elements and a logo for the website i'm doing...",
      date: '7 min ago',
      person: 'John Doe',
      answer: '2 answers',
    },
    {
      title: 'Trigger multiple svg line animations when in viewport',
      status: false,
      content:
        'I have that working on my (webflow) site. However, how do I go about if I have several svgs on one page which are not visible at the same time? At the moment only the first one is triggered.',
      date: '44 min ago',
      person: 'Henry Cavill',
      answer: '0 answers',
    },
    {
      title: 'Remove selected element from array',
      status: true,
      content:
        'I have input feild which takes a input (interest) from user and after hitting the Enter key adds the interest to the interests array. ',
      date: '1 hour ago',
      person: 'Emmanuel Macron',
      answer: '9 answers',
    },
    {
      title: 'Photoshop help for cropping and more',
      status: false,
      content:
        "I'm trying to crop and image with photoshop but I can't figure out how to...",
      date: '2 hours ago',
      person: 'Alexandre Astier',
      answer: '6 answers',
    },
    {
      title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      status: true,
      content:
        'Suspendisse enim mauris, vehicula blandit orci nec, viverra bibendum dolor. Suspendisse venenatis nec leo id accumsan. Sed congue diam purus, ac euismod dui condimentum et',
      date: '2 hours ago',
      person: 'Jules César',
      answer: '18 answers',
    },
    {
      title: 'U spendisse sed risus sit amet neque condimentum ',
      status: false,

      content:
        'Vivamus tempus iaculis arcu nec pharetra. Fusce erat nunc, pulvinar ut molestie vitae, tristique nec nulla. Vestibulum molestie dignissim posuere. Aliquam condimentum id nibh ac volutpat',
      date: '4 hours ago',
      person: 'Gérard Depardieu',
      answer: '1 answers',
    },
  ];

  return (
    <Row className='forum'>
      <Col sm md='auto'>
        <div className='author'>Choosen categories : </div>
        <ListGroup>
          <ListGroup.Item>HTML/CSS</ListGroup.Item>
          <ListGroup.Item>Javascript</ListGroup.Item>
          <ListGroup.Item>NodeJS</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
        </ListGroup>
        <div className='filters'>
          <div className='bold'>Filter list by</div>
          <Form>
            <Form.Check type='switch' id='custom-switch' label='Unanswered' />
          </Form>
          <Form>
            <Form.Check type='switch' id='custom-switch2' label='Date' />
          </Form>
          <Form>
            <Form.Check
              type='switch'
              id='custom-switch3'
              label='Alphabetically'
            />
          </Form>
          <Form>
            <Form.Check type='switch' id='custom-switch4' label='Unresolved' />
          </Form>
        </div>
      </Col>
      <Col sm className='messagelist'>
        {MessageData &&
          MessageData.map((message) => (
            <Toast closeButton={false}>
              <Toast.Header>
                <strong className='me-auto title'>
                  <div className='status'>
                    {message.status ? <GrStatusGood /> : <GrCircleQuestion />}
                  </div>
                  {message.title}
                </strong>
                <span>{message.answer}</span>
              </Toast.Header>
              <Toast.Body>{message.content}</Toast.Body>
              <Toast.Body className='toast-footer'>
                <Button variant='outline-primary'>See more</Button>{' '}
                <div>
                  <span className='author'>{message.person}, </span>
                  <span className='date'>{message.date}</span>
                </div>
              </Toast.Body>
            </Toast>
          ))}
      </Col>
    </Row>
  );
};
