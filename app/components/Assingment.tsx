import Link from 'next/link';
import React from 'react';

const Assignment = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 bg-black text-white p-12 mt-28 mb-40'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-4'>1 Assignment</h1>
       
        <Link href="https://class-navbar.vercel.app/" target='_blank'> <img 
          src="/image/asing/Annotation 2024-10-26 022306.png" 
          alt="Assignment 1" 
          className='h-50 w-50 object-cover'
           
        /></Link>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-4'>2 Assignment</h2>
       <Link href="https://class-asinment-2.vercel.app/" target='_blank'> <img 
          src="/image/asing/Annotation 2024-10-26 021945.png" 
          alt="Assignment 2" 
          className='h-50 w-50 object-cover' 
        /></Link>
      </div>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-4'>Portfolio</h1>
        <Link href="https://assimgnent-porfplio.vercel.app/" target='_blank'><img 
          src="/image/asing/Annotation 2024-10-26 022109.png" 
          alt="Portfolio" 
          className='h-50 w-50 object-cover' 
        /></Link>
      </div>
    </div>
  );
}

export default Assignment;
