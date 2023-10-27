import React from 'react';
import durationIcon from '../../assets/duration.svg';
import downloadIcon from '../../assets/download.svg';
import videoIcon from '../../assets/video.svg';
import instagramLogo from '../../assets/instagram logo.png';
import linkedinLogo from '../../assets/linkedin logo.png';

const Card = ({
  img,
  imgClass,
  isCourse,
  title,
  subtitle,
  body,
  price,
  durationText,
  videoText,
  downloadText,
}) => {
  return (
    <div className="card-shadow relative w-[490px] rounded-2xl p-2">
      <img src={img} alt="" className={`rounded-2xl ${imgClass}`} />
      {isCourse ? (
        <>
          <p className="text-[#ACACAC] font-medium font-poppins">{subtitle}</p>
          <h4 className="font-medium font-poppins text-xl">{title}</h4>
          <p className="text-orange-primary text-xl font-medium font-poppins">
            {price}
          </p>
          <div className="h-[1px] w-full border-b border-[#ACACAC] border-dotted"></div>
          <div className="flex gap-x-4 mt-4 mb-12">
            <span className="flex items-center gap-x-2">
              <img src={durationIcon} alt="" />
              {durationText}
            </span>
            <span className="flex items-center gap-x-2">
              <img src={videoIcon} alt="" />
              {videoText}
            </span>
            <span className="flex items-center gap-x-2">
              <img src={downloadIcon} alt="" />
              {downloadText}
            </span>
          </div>
          <button className="absolute w-56 -bottom-7 left-1/2 right-1/2 -translate-x-1/2 bg-orange-primary text-white font-roboto-bold font-medium text-2xl rounded-full py-3 px-9">
            Join Courses
          </button>
        </>
      ) : (
        <div>
          <p className="font-poppins font-medium">{title}</p>
          <p className="text-[#868686]">{subtitle}</p>
          <p className="text-[#ACACAC] mt-4 mb-5">{body}</p>
          <div className="flex justify-between">
            <p className="text-lg text-orange-primary">Engineering physics</p>
            <div className="flex gap-x-3">
              <div className="p-2 bg-[#F9F9F9] cursor-pointer">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="p-2 bg-[#F9F9F9] cursor-pointer">
                <img src={linkedinLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
