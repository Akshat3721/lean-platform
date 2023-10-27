import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto pt-8 pb-16">
        <div className="flex flex-col gap-y-6 max-w-[318px]">
          <div className="font-roboto-bold flex items-center gap-x-5 text-2xl text-black-secondary">
            <img src={Logo} alt="Book Store" />
            <h2>Book Store</h2>
          </div>
          <p className="text-[#606060] text-lg font-roboto-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-y-7 text-[#606060] text-lg font-roboto-bold">
          <h4 className="text-2xl text-[#00052E]">Company</h4>
          <a href="#">About us</a>
          <a href="#">How to work?</a>
          <a href="#">Popular Course</a>
          <a href="#">Service</a>
        </div>
        <div className="flex flex-col gap-y-7 text-[#606060] text-lg font-roboto-bold">
          <h4 className="text-2xl text-[#00052E]">Courses</h4>
          <a href="#">Categories</a>
          <a href="#">Offline course</a>
          <a href="#">Video course</a>
        </div>
        <div className="flex flex-col gap-y-7 text-[#606060] text-lg font-roboto-bold">
          <h4 className="text-2xl text-[#00052E]">Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Career</a>
          <a href="#">Privacy</a>
        </div>
        <div className="flex flex-col gap-y-7 text-[#606060] text-lg font-roboto-bold">
          <h4 className="text-2xl text-[#00052E]">Contact Info</h4>
          <a href="tel:+0913-705-3875">+0913-705-3875</a>
          <a href="mailto:ElizabethJ@jourrapide.com">
            ElizabethJ@jourrapide.com
          </a>
          <p className="max-w-[228px]">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </p>
        </div>
      </div>
      <hr />
      <p className="text-[#606060] font-roboto-bold text-lg py-5 pb-8 text-center">
        BookStore All Right Reserved, 2022
      </p>
    </>
  );
};

export default Footer;
