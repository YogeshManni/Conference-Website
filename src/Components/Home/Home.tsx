import React from "react";
import homeData from "../../data/homeData";

import Conference from "./Conference";
import Programs from "./Programs";
import Hero from "./Hero";

interface SectionProps {
  tagline: string;
  subHeading: string;
  src: string;
  reverse?: boolean;
  callToAction: {
    text: string;
    link: string;
  };
}

// Section component with flexible layout
const Section: React.FC<SectionProps> = ({
  tagline,
  subHeading,
  src,
  reverse,
  callToAction,
}) => {
  return (
    <div
      id="main"
      data-aos="fade-up"
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between py-16 px-8 bg-white max-w-screen-xl mx-auto`}
    >
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{tagline}</h2>
        <p className="text-lg mb-6">{subHeading}</p>
        <a
          href={callToAction.link}
          className="custom-button Btn inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          {callToAction.text}
        </a>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src={src}
          alt={tagline}
        />
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Hero
          tagline={homeData[0].headline}
          subHeading={homeData[0].subheadline}
          src={homeData[0].backgroundImage}
          callToAction={homeData[0].callToAction}
        />
      </div>

      <Section
        tagline={homeData[1].headline}
        subHeading={homeData[1].subheadline}
        src={homeData[1].backgroundImage}
        callToAction={homeData[1].callToAction}
      />
      <Section
        tagline={homeData[2].headline}
        subHeading={homeData[2].subheadline}
        src={homeData[2].backgroundImage}
        reverse
        callToAction={homeData[2].callToAction}
      />
      <Conference />
      <Programs />
    </>
  );
};

export default Home;