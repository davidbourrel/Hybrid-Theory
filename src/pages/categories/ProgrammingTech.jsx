import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import programming from '../../assets/images/categories/programming.jpg';

export const ProgrammingTech = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.programmingAndTech} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Programming & Tech
      </h1>
      <div className='d-flex justify-content-center'>
        <img src={programming} alt='programming' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
