import React from "react";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex justify-center items-center text-white text:sm md:text-lg h-24 bg-slate-900">
      <span className="flex justify-center items-center text-center">
        <PiCopyrightThin /> Copyryght | André Felipe Rodrigues de Freitas
      </span>
    </div>
  );
};

export { Footer };
