import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import lifestyle from '../../assets/images/categories/lifestyle.jpg';

export const Lifestyle = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.lifestyle} />
      <h1 className='text-center text-primary my-3 fw-bold'>Lifestyle</h1>
      <div className='d-flex justify-content-center'>
        <img src={lifestyle} alt='lifestyle' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
