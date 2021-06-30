import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import digitalMarketing from '../../assets/images/categories/digital-marketing.jpg';

export const DigitalMarketing = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.digitalMarketing} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Digital Marketing
      </h1>
      <div className='d-flex justify-content-center'>
        <img src={digitalMarketing} alt='digitalMarketing' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
