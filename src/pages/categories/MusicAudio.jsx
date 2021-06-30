import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import music from '../../assets/images/categories/music.jpg';

export const MusicAudio = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.musicAndAudio} />
      <h1 className='text-center text-primary my-3 fw-bold'>Music & Audio</h1>
      <div className='d-flex justify-content-center'>
        <img src={music} alt='music' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
