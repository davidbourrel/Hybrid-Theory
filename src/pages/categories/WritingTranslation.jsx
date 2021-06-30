import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import translation from '../../assets/images/categories/translation.jpg';

export const WritingTranslation = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.writingsAndTranslation} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Writing & Translation
      </h1>
      <div className='d-flex justify-content-center'>
        <img src={translation} alt='translation' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
