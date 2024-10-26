import React from 'react';

const Hero_Saction = () => {
  return (
    <div className='bg-[url("/image/4601511691330ce37c967d498adbd108.gif")] bg-cover  h-screen flex items-center'>
      <div className='flex flex-col items-start p-16'>
        <h1 className='text-white text-4xl font-extrabold mb-4'>
          Hello, I am Haroon Rasheed
        </h1>
        <p className='text-white text-lg mb-6 mr-48'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo error recusandae illo molestiae assumenda earum at? Rem illum, quam molestiae, nam explicabo itaque id libero quod, praesentium amet excepturi?
        </p>
        <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200'>
          Learn More
        </button>
      </div>
      <div className='flex justify-center items-center w-1/2'>
  <img 
    src="/image/img-bg.gif" 
    alt="Some description" 
    className='w-80 h-80 border-4 border-white shadow-lg mb-16 rounded-full object-cover mr-72' 
  />
</div>

    </div>
  );
}

export default Hero_Saction;
