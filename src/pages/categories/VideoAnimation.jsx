import React from 'react';
import { Navigation } from '../../components/Navigation';
import { ChooseForum } from '../../components/ChooseForum';
import { SecondaryNavbar } from '../../components/SecondaryNavbar';
import data from '../../categoriesDTO.json';
import { Footer } from '../../components/Footer';
import video from '../../assets/images/categories/video.jpg';

export const VideoAnimation = () => {
  return (
    <>
      <Navigation />
      <SecondaryNavbar data={data.videoAndAnimation} />
      <h1 className='text-center text-primary my-3 fw-bold'>
        Video & Animation
      </h1>
      <div className='d-flex justify-content-center'>
        <img src={video} alt='video' className='w-50' />
      </div>
      <ChooseForum />
      <Footer />
    </>
  );
};
