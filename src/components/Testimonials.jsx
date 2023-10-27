import React from 'react';
import SectionTitleSubtitle from './common/SectionTitleSubtitle';
import headshot1 from '../assets/headshot1.png';
import headshot2 from '../assets/headshot2.png';
import headshot3 from '../assets/headshot3.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Testimonials = () => {
  const items = [
    <div className="card-shadow-spread p-8 flex flex-col gap-y-6 w-[416px] mx-auto  bg-white">
      <p className="text-lg text-[#ACACAC]">
        “Teachings of the great explore of truth, the master-builder of human
        happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure
        itself”
      </p>
      <div className="flex items-center gap-x-4">
        <img src={headshot1} alt="" />
        <div>
          <p className="font-medium text-lg text-[#353535]">Finlay Kirk</p>
          <p className="text-xs text-[#8E8E8E]">Web Developer</p>
        </div>
      </div>
    </div>,
    <div className="card-shadow-spread p-8 flex flex-col gap-y-6 w-[416px] mx-auto bg-white">
      <p className="text-lg text-[#ACACAC]">
        “Complete account of the system and expound the actual Contrary to
        popular belief, Lorem Ipsum is not simply random text. It has roots”
      </p>
      <div className="flex items-center gap-x-4">
        <img src={headshot2} alt="" />
        <div>
          <p className="font-medium text-lg text-[#353535]">
            Dannette P. Cervantes
          </p>
          <p className="text-xs text-[#8E8E8E]">Web Design</p>
        </div>
      </div>
    </div>,
    <div className="card-shadow-spread p-8 flex flex-col gap-y-6 w-[416px] mx-auto bg-white">
      <p className="text-lg text-[#ACACAC]">
        “There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour”
      </p>
      <div className="flex items-center gap-x-4">
        <img src={headshot3} alt="" />
        <div>
          <p className="font-medium text-lg text-[#353535]">Clara R. Altman</p>
          <p className="text-xs text-[#8E8E8E]">UI&UX Design</p>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="bg-white h-full">
      <SectionTitleSubtitle
        title="What student’s say"
        subtitle="Lorem Ipsum is simply dummy text of the printing."
      />
      <div className="flex gap-x-6 justify-center font-roboto-bold mx-10">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={1000}
          infinite
          disableButtonsControls
          //   stagePadding={{ paddingLeft: 400, paddingRight: 400 }}
          responsive={{ 0: { items: 1 }, 768: { items: 3 } }}
          //   paddingLeft={200}
          //   paddingRight={200}
        />
      </div>
    </div>
  );
};

export default Testimonials;
