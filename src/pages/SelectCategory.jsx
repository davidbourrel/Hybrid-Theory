import React from 'react';
import { CardCategories } from '../components/CardCategories';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/Footer';

export const SelectCategory = () => {
  return (
    <>
      <h1 className='py-5 px-3 text-white fw-bold bg-primary'>
        Find the perfect freelance services for your business
      </h1>
      <h2 className='py-5 px-3 text-secondary fw-bold text-center'>
        What category of job are you looking for ?
      </h2>
      <Container>
        <CardCategories />
      </Container>
      <Footer />
    </>
  );
};
