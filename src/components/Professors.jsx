import React from 'react';
import SectionTitleSubtitle from './common/SectionTitleSubtitle';
import Card from './common/Card';
import professor1 from '../assets/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture 1.png';
import professor2 from '../assets/portrait-female-teacher-white 1.png';
import professor3 from '../assets/cynthia.png';

const Professors = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <SectionTitleSubtitle
          title="Our Tracks"
          subtitle="Lorem Ipsum is simply dummy text of the printing."
        />
        <div className="flex gap-x-7">
          <Card
            img={professor1}
            imgClass="w-[500px]"
            title="Matthew E. McNatt"
            subtitle="Professor @George Brown College"
            body="Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo."
          />
          <Card
            img={professor2}
            imgClass="w-[500px]"
            title="Tracy D. Wright"
            subtitle="Professor @George Brown College"
            body="Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo."
          />
          <Card
            img={professor3}
            imgClass="w-[500px]"
            title="Cynthia A. Nelson"
            subtitle="Professor @George Brown College"
            body="Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo."
          />
        </div>
      </div>
    </div>
  );
};

export default Professors;
