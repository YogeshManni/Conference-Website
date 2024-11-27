import React from "react";

interface HeadingProps {
  tagline: string;
  subHeading: string;
  src: string;
  callToAction: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeadingProps> = ({
  tagline,
  subHeading,
  src,
  callToAction,
}) => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover"
        src={src}
        alt="Comox Valley Programs"
      />
      <div className="absolute inset-0 flex items-center p-8 lg:p-24 xl:p-32">
        <div className="bg-black bg-opacity-75 max-w-2xl rounded-lg p-6 lg:p-12 xl:p-16">
          <h1 className="text-white font-bold text-5xl md:text-6xl">
            {tagline}
          </h1>
          <p className="text-white text-lg md:text-xl mt-4">{subHeading}</p>
          <a
            href={callToAction.link}
            className="custom-button Btn mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {callToAction.text}
          </a>
        </div>
      </div>

      <a href="#main">
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-headingColor bg-opacity-80">
            <span className="animate-bounce text-white text-4xl font-bold">
              ↓
            </span>
          </div>
          <p className="font-bold text-white text-sm mt-2">Scroll down</p>
        </div>
      </a>
    </div>
  );
};

export default Hero;
