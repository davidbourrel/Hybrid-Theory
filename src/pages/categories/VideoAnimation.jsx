import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';

export const VideoAnimation = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.videoAndAnimation} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Video & Animation
      </h1>
      <ChooseForum />
      <Footer />
    </>
  );
};
