import React from 'react';
import { Navigation } from '../components/Navigation';
import { Forum } from '../components/Forum';
import { Footer } from '../components/Footer';

export const CollaborationForum = () => {
  return (
    <>
      <Navigation />
      <h1 className='text-center text-primary my-3 fw-bold'>
        What I am looking for
      </h1>
      <Forum />
      <Footer />
    </>
  );
};
