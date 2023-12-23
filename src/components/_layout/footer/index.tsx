import React from "react";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex justify-around items-center text-white text-lg h-24 bg-slate-900">
      <span className="flex justify-center items-center">
        <PiCopyrightThin /> Copyryght | André Felipe Rodrigues de Freitas
      </span>
      <div className="flex justify-center items-center text-white">
        <h1>Contatos</h1>
      </div>
    </div>
  );
};

export { Footer };
