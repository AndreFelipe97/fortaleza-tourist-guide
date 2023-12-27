import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CardLocaleProps {
  label: string;
  img: string;
  page: string;
}

const CardLocale: React.FC<CardLocaleProps> = ({ label, img, page }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-white text-xl text-center">{label}</h1>
      <Link href={page}>
        <Image src={img} alt="Fortaleza" width={500} height={321} />
      </Link>
    </div>
  );
};

export { CardLocale };
