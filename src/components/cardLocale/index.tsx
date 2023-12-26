import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardLocaleProps {
  label: string;
  img: StaticImageData;
}

const CardLocale: React.FC<CardLocaleProps> = ({ label, img }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-white text-xl">{label}</h1>
      <button>
        <Image src={img} alt="Fortaleza" width={500} height={321} />
      </button>
    </div>
  );
};

export { CardLocale };
