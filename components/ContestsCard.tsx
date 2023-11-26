import React from 'react';
import Image from 'next/image';
import imf from '../public/emily-WOBRFCzgLdk-unsplash.jpg';

type Props = {};

const ContestsCard = (props: Props) => {
  return (
    <div className='h-96 bg-red-500'>
      <div className='h-2/3'>
        <Image src={imf} style={{ width: '100%', height:"100%", objectFit:"cover" }} alt='Contest Image' />
      </div>
      <div className='h-1/3'>
        dhbjhjevl jkjjlk lbcjbd kls d skbscz 
      </div>
    </div>
  );
};

export default ContestsCard;