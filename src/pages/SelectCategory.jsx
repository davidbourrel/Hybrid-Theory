import React from 'react';
import { CardCategories } from '../components/CardCategories';
import { Container } from 'react-bootstrap';

export const SelectCategory = () => {
  return (
    <Container>
      <h1 className='my-5 text-primary fw-bold'>
        Find the perfect freelance services for your business
      </h1>
      <h2 className='my-3 text-secondary fw-bold'>
        Which category are you looking for ?
      </h2>
      <CardCategories />
    </Container>
  );
};
