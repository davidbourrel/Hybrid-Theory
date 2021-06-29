import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';

export const MusicAudio = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.musicAndAudio} />
      <h1 className='text-center text-primary my-3 fw-bold'>Music & Audio</h1>
      <ChooseForum />
      <Footer />
    </>
  );
};
