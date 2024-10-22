import { Carousel } from "antd";
import React, { useState } from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";

// Define props interface for Heading component
interface HeadingProps {
  tagline: string;
  subHeading: string;
  src: string;
}

const Heading: React.FC<HeadingProps> = ({ tagline, subHeading, src }) => {
  return (
    <>
      <img
        className="w-[100%] h-[100vh] object-cover"
        src={src}
        alt="Comox Valley Programs"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex top-[30%] left-[15%] flex-col">
        <span className="text-headingColor font-bold font-arizonia text-[3rem]">
          {tagline}
        </span>
        <span className="text-white md:text-[2rem] font-bold text-[20px]">
          {subHeading}
        </span>
      </div>
    </>
  );
};

const Home: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  const hideProfile = () => {
    setShowProfile(false);
  };

  return (
    <>
      <Carousel effect="fade" arrows infinite autoplay data-aos="fade-up">
        <div className="relative">
          <Heading
            tagline={"Comox Valley Conferences 2024"}
            subHeading={"Highlight the year of the event and its significance."}
            src={img1}
          />
        </div>
        <div className="relative">
          <Heading
            tagline={"Innovative Workshops & Seminars"}
            subHeading={"Emphasize learning opportunities at the conferences."}
            src={img2}
          />
        </div>
        <div className="relative">
          <Heading
            tagline={"Join Our Keynote Sessions"}
            subHeading={"Highlight important talks or keynote speeches."}
            src={img3}
          />
        </div>
        <div className="relative">
          <Heading
            tagline={"Opportunities for Professional Growth"}
            subHeading={"Encourage participants to focus on self-improvement and career development."}
            src={img4}
          />
        </div>
      </Carousel>
    </>
  );
};

export default Home;
