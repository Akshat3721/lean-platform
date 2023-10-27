import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-white flex justify-center pt-40 pb-32">
      <div className="bg-[#4D2C5E] rounded-xl w-3/5 h-[429px] pt-24 pb-28 flex flex-col items-center justify-center">
        <h2 className="font-poppins text-[40px] text-white font-semibold">
          Subscribe to our newsletter
        </h2>
        <p className="text-white font-poppins text-xl font-medium">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="w-3/5 bg-white rounded-full p-2 flex justify-between font-poppins font-medium text-xl">
          <input
            type="email"
            placeholder="Email Address"
            className="placeholder:text-[#ACACAC] rounded-full pl-10"
          />
          <button className="text-white font-poppins font-medium text-xl bg-orange-primary py-5 px-20 rounded-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
