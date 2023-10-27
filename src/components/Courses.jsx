import React from 'react';
import cardImage3 from '../assets/image 6.png';
import cardImage2 from '../assets/image 7.png';
import cardImage1 from '../assets/little-girl-participating-online-classes 1.png';
import Card from './common/Card';
import SectionTitleSubtitle from './common/SectionTitleSubtitle';

const Courses = () => {
  return (
    <div className="bg-white pb-40 pt-44">
      <div className="container mx-auto">
        <SectionTitleSubtitle
          title="Our Tracks"
          subtitle="Lorem Ipsum is simply dummy text of the printing."
        />
        <div className="flex justify-between">
          <Card
            img={cardImage1}
            imgClass="w-[500px]"
            title="UI/UX Design for Beginners"
            subtitle="UI/UX Design"
            price="$98"
            durationText="22hrs 30min"
            videoText="34 Courses"
            downloadText="250 Sales"
            isCourse
          />
          <Card
            img={cardImage2}
            imgClass="w-[500px]"
            title="UI/UX Design for Beginners"
            subtitle="UI/UX Design"
            price="$98"
            durationText="22hrs 30min"
            videoText="34 Courses"
            downloadText="250 Sales"
            isCourse
          />
          <Card
            img={cardImage3}
            imgClass="w-[500px]"
            title="UI/UX Design for Beginners"
            subtitle="UI/UX Design"
            price="$98"
            durationText="22hrs 30min"
            videoText="34 Courses"
            downloadText="250 Sales"
            isCourse
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
