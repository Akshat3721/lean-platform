import React from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="font-roboto-bold flex items-center gap-x-5 text-2xl text-black-secondary">
        <img src={Logo} alt="Book Store" />
        <h2>Book Store</h2>
      </div>
      <div className="text-lg flex gap-x-11 items-center font-roboto-bold font-semibold text-black-secondary">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Courses</a>
        <a href="#">Our Service</a>
        <a href="#">Contact us</a>
        <button className="bg-[#4D2C5E] py-4 px-14 text-white rounded-full text-2xl font-medium">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
