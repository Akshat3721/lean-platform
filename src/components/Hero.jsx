import React from 'react';
import magnifyingGlass from '../assets/magnifying glass.png';
import heroImage from '../assets/smart choice logo.png';
import onlineTest from '../assets/online-test 1.png';

const Hero = () => {
  return (
    <div className="relative container mx-auto h-[calc(100vh_-_128px)] mt-24">
      <div className="flex items-center">
        <div className="flex flex-col w-2/5 justify-center">
          <h2 className="capitalize text-black-primary text-[69px] font-extrabold">
            The <span className="text-orange-primary">smart</span>
            <br /> Choice For{' '}
            <span className="text-orange-primary">Future</span>
          </h2>
          <p className="font-medium text-[#8A8A8A] mt-2 mb-12 text-xl">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>
          <div className="bg-white flex items-center rounded-full p-2 justify-between">
            <div className="flex items-center ml-5">
              <img src={magnifyingGlass} alt="search" />
              <input
                placeholder="Search for a location..."
                className="placeholder:font-medium placeholder:text-[#0F335E] ml-3 w-full"
              />
            </div>
            <button className="py-5 px-7 rounded-full bg-[#4D2C5E] text-white">
              Continue
            </button>
          </div>
        </div>
        <div className="w-3/5 bg-eclipse bg-no-repeat bg-right-top">
          <img src={heroImage} alt="" />
        </div>
      </div>
      <div className="flex justify-center bg-[#4D2C5E] rounded-[14px] gap-x-12 text-white py-[70px] px-9">
        <div className="flex items-center gap-x-6">
          <div className="p-6 bg-[#ffffff33] rounded-3xl">
            <img src={onlineTest} alt="" />
          </div>
          <div className="max-w-[292px] font-roboto-bold flex flex-col gap-y-4">
            <p className="font-bold">Learn The Latest Skills</p>
            <p className="font-medium text-[#ffffff99]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="p-6 bg-[#ffffff33] rounded-3xl">
            <img src={onlineTest} alt="" />
          </div>
          <div className="max-w-[292px] font-roboto-bold flex flex-col gap-y-4">
            <p className="font-bold">Learn The Latest Skills</p>
            <p className="font-medium text-[#ffffff99]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="p-6 bg-[#ffffff33] rounded-3xl">
            <img src={onlineTest} alt="" />
          </div>
          <div className="max-w-[292px] font-roboto-bold flex flex-col gap-y-4">
            <p className="font-bold">Learn The Latest Skills</p>
            <p className="font-medium text-[#ffffff99]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
