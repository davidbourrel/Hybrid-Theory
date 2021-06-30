import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import { Footer } from '../../components/Footer';
import data from '../../categoriesDTO.json';
import business from '../../assets/images/categories/business.jpg';

export const Business = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.business} />
      <h1 className='text-center text-primary my-3 fw-bold'>Business</h1>
      <div className='d-flex justify-content-center'>
        <img src={business} alt='business' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
