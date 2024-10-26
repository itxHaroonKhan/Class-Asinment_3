import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
  <footer className="flex flex-col items-center p-4">
    <div className="mb-2">
      <p className="text-lg">Haroon Rasheed</p>
    </div>
    <div className="flex space-x-4 mb-2">
      <a href="#" className="hover:text-gray-400">Facebook</a>
      <a href="#" className="hover:text-gray-400">Twitter</a>
      <a href="#" className="hover:text-gray-400">Instagram</a>
      <a href="#" className="hover:text-gray-400">LinkedIn</a>
    </div>
    <div className="text-sm">
      <p>&copy; 2024 Haroon Rasheed. All rights reserved.</p>
    </div>
  </footer>
</div>
  );
}

export default Footer;
