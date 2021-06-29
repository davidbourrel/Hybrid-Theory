import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';

export const ProgrammingTech = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.programmingAndTech} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Programming & Tech
      </h1>
      <ChooseForum />
    </>
  );
};
