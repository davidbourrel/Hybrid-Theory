import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { GraphicsDesignNavbar } from '../../components/GraphicsDesignNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import graphicsDesign from '../../assets/images/categories/graphics-design.jpg';

export const GraphicsDesign = () => {
  return (
    <>
      <Navigation />
      <GraphicsDesignNavbar data={data.graphicsDesign} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Graphics & Design
      </h1>
      <div className='d-flex justify-content-center'>
        <img src={graphicsDesign} alt='graphicsDesign' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
