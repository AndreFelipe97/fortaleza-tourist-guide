"use client";
import { Loading } from "@/components/loading";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePrismicDocumentByUID } from "@prismicio/react";
import Link from "next/link";

interface TouristSpot {
  uid: string;
  title: string;
  content: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
}

export default function Spot() {
  const [loading, setLoading] = useState(true);
  const [touristSpot, setTouristSpot] = useState<TouristSpot>(
    {} as TouristSpot
  );
  const pathname = usePathname();
  const [, id] = pathname ? pathname.replace("/", "").split("/") : [];
  const [document] = usePrismicDocumentByUID("attraction", id as string);

  const loadSpot = useCallback(async () => {
    try {
      const spot = {
        uid: document?.uid,
        title: document?.data.title[0].text,
        content: document?.data.content[0].text,
        imageOne: document?.data.imageone.url,
        imageTwo: document?.data.imagetwo.url,
        imageThree: document?.data.imagethree.url,
      };
      setTouristSpot(spot as TouristSpot);
    } catch (error) {
      console.log(error);
    }
  }, [document]);

  useEffect(() => {
    setLoading(true);
    loadSpot();
    setLoading(false);
  }, [loadSpot]);

  useEffect(() => {
    setLoading(true);
    loadSpot();
    setLoading(false);
  }, [document, id, loadSpot]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Link
        className="
          md:fixed 
          md:w-28 
          h-12
          md:top-36 
          md:right-3 
          bg-green-600 
          text-white 
          rounded-md
          decoration-none
          ml-5
          mr-5
          mt-2
          flex
          justify-center
          items-center
        "
        href="/fale-conosco"
      >
        Fale conosco
      </Link>
      <div className="flex justify-center gap-8 flex-wrap ml-5 mr-5 mt-2 md:p-40">
        <h1 className="text-white text-xl md:text-3xl">
          {touristSpot.title && touristSpot.title}
        </h1>

        <div className="flex justify-start gap-8 flex-wrap">
          {touristSpot.content &&
            touristSpot.content.split("|").map((paragraph, index) => (
              <p className="text-white text-justify" key={index}>
                {paragraph}
              </p>
            ))}
        </div>
        <div className="flex justify-center gap-8 flex-wrap py-5">
          <Image src={touristSpot.imageOne} alt="" width={500} height={321} />
          <Image src={touristSpot.imageTwo} alt="" width={500} height={321} />
          <Image src={touristSpot.imageThree} alt="" width={500} height={321} />
        </div>
      </div>
    </>
  );
}
