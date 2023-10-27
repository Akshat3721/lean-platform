import React from 'react';
import learningExperience from '../assets/learning experience.png';
import heart from '../assets/hearts 1.png';
import jigsaw from '../assets/jigsaw 1.png';

const LearningExperience = () => {
  return (
    <div className="flex container mx-auto gap-x-40 pt-20">
      <img src={learningExperience} alt="" />
      <div>
        <h2 className="capitalize text-black-primary text-[69px] font-extrabold">
          Premium <span className="text-orange-primary">Learning</span>{' '}
          Experience
        </h2>
        <div className="flex flex-col gap-y-8 mt-12">
          <div className="flex gap-x-6 items-center">
            <div className="bg-[#4D2C5E] p-6 rounded-3xl">
              <img src={heart} alt="" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-black-primary text-3xl font-roboto-bold font-medium">
                Easily Accessible
              </p>
              <p className="text-[#8A8A8A] font-roboto-bold font-medium text-2xl">
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 items-center">
            <div className="bg-[#4D2C5E] p-6 rounded-3xl">
              <img src={jigsaw} alt="" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-black-primary text-3xl font-roboto-bold font-medium">
                Fun learning expe
              </p>
              <p className="text-[#8A8A8A] font-roboto-bold font-medium text-2xl">
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningExperience;
