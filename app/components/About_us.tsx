import React from 'react';

const About_us = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center p-8 text-white mx-64 py-28'>
      <img 
        src="/image/Picsart_24-10-05_11-34-59-133.png" 
        alt="About Me" 
        className='h-32 w-32 rounded-full border-4 border-white object-cover mb-4 bg-amber-200' 
      />
      <h3 className='text-2xl font-bold mb-2'>About Me</h3>
      <p className='text-lg mx-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quia neque earum fuga ipsa quod odit, sequi placeat animi officia sapiente harum tenetur eos, ad architecto impedit? Commodi, cum excepturi.
      </p>
    </div>
  );
}

export default About_us;
