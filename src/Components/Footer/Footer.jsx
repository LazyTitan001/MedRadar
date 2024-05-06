import React from 'react';
import { FooterData } from "../Shared/Consts";

const Footer = () => {
  return (
    <div className="bg-[#aed4ff] mt-20 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold">
          <img width={225} src={FooterData.logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
