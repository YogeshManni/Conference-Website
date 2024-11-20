//LogoComponent.tsx

import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const LogoComponent: React.FC = () => {
  return (
    <div className="h-[auto] auto m-5 flex items-center justify-center">
      <Link to="/">
        <img
          src={logo}
          className="h-[100px] rounded-full w-auto"
          alt="logo"
        ></img>
      </Link>
    </div>
  );
};

export default LogoComponent;
