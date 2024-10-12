import React from 'react';
import LatelyCards from './LatelyCards';
import RecomendedCards from './RecomendedCards';
import Footer from './Footer';

const Recomended = () => {
  return (
    <div className='pt-14 h-auto'>
    
      <div className='grid w-full grid-cols-3  overflow-hidden gap-3  md:px-14 lg:px-20 px-5 lg:grid-cols-5'>
      <RecomendedCards/>
      <RecomendedCards/>
      <RecomendedCards/>
      <RecomendedCards/>
      <RecomendedCards/>
      
      
      </div>
      </div>
  );
};

export default Recomended;
