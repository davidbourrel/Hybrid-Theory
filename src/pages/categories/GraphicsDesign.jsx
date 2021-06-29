import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { GraphicsDesignNavbar } from '../../components/GraphicsDesignNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';

export const GraphicsDesign = () => {
  return (
    <>
      <Navigation />
      <GraphicsDesignNavbar data={data.graphicsDesign} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Graphics & Design
      </h1>
      <ChooseForum />
      <Footer />
    </>
  );
};
