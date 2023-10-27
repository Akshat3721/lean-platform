import React from 'react';

const SectionTitleSubtitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 pt-14">
      <h2 className="capitalize text-5xl font-jost font-semibold mb-2">
        {title}
      </h2>
      <p className="text-[#8A8A8A] font-medium font-poppins text-xl">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitleSubtitle;
