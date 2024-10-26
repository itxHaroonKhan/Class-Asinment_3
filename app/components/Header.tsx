import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-slate-700 text-white'>
      <h1 className='font-bold text-3xl ml-3'  style={{ fontFamily: 'Roboto Mono, monospace' }}> <a href="https://hacathon-milestone-grmy.vercel.app/">Cv</a></h1>
      
      <nav>
        <ul className='flex gap-10 font-bold ml-16'>
          <li className='transition hover:bg-black p-2 rounded'>
            <Link href="/">Home</Link>
          </li>
          <li className='transition hover:bg-black p-2 rounded'>
            <Link href="/about">About</Link>
          </li>
          <li className='transition hover:bg-black p-2 rounded'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <input 
        type="text" 
        placeholder='Enter Name' 
        className='h-10 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none ml-4'
      />
    </div>
  );
}

export default Header;
