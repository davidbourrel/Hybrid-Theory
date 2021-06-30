import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import dataImage from '../../assets/images/categories/data.jpg';

export const Data = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.data} />
      <h1 className='text-center text-primary my-3 fw-bold'>Data</h1>
      <div className='d-flex justify-content-center'>
        <img src={dataImage} alt='data' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
