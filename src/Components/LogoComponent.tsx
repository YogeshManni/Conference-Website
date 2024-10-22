import React from "react";
import logo from "../assets/img/logo.png";

const LogoComponent: React.FC = () => {
  return (
    <div className="h-[auto] auto m-5 flex items-center justify-center">
      <img src={logo} className="h-[100px] w-auto" alt="logo"></img>
    </div>
  );
};

export default LogoComponent;
