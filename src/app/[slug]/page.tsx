"use client";

import { Loading } from "@/components/loading";
import { getTouristSpot } from "@/services/getFile";
import {
  ParqueDoCoco1,
  ParqueDoCoco2,
  ParqueDoCoco3,
  ParqueDoCoco4,
  ParqueDoCoco5,
  ParqueDoCoco6,
} from "@/assets/imgs/ParqueDoCoco";
import {
  DragaoDoMar01,
  DragaoDoMar02,
  DragaoDoMar03,
  DragaoDoMar04,
  DragaoDoMar05,
  DragaoDoMar06,
} from "@/assets/imgs/dragaoDoMar";
import {
  TheatroJoseDeAlencar1,
  TheatroJoseDeAlencar2,
  TheatroJoseDeAlencar3,
  TheatroJoseDeAlencar4,
  TheatroJoseDeAlencar5,
} from "@/assets/imgs/theatroJoseDeAlencar";
import {
  MecardoCentral01,
  MecardoCentral02,
  MecardoCentral03,
  MecardoCentral04,
  MecardoCentral05,
} from "@/assets/imgs/mercadoCentral";
import {
  ArenaCastelao01,
  ArenaCastelao02,
  ArenaCastelao03,
  ArenaCastelao04,
  ArenaCastelao05,
} from "@/assets/imgs/arenaCastelão";
import {
  FeirinhaDaBeiraMar01,
  FeirinhaDaBeiraMar02,
  FeirinhaDaBeiraMar03,
  FeirinhaDaBeiraMar04,
  FeirinhaDaBeiraMar05,
} from "@/assets/imgs/feirinhaBeiraMar";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TouristSpot {
  title: string;
  slug: string;
  content: string;
}

export default function Spot() {
  const [loading, setLoading] = useState(true);
  const [touristSpot, setTouristSpot] = useState<TouristSpot>(
    {} as TouristSpot
  );

  async function getSpot() {
    try {
      const spot = await getTouristSpot(
        window.location.pathname.replace("/", "")
      );
      setTouristSpot(spot);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoading(true);

    getSpot();

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  function showImage() {
    if (
      window.location.pathname.replace("/", "") ===
      "centro-dragao-do-mar-de-arte-e-cultura"
    ) {
      return [
        DragaoDoMar01,
        DragaoDoMar02,
        DragaoDoMar03,
        DragaoDoMar04,
        DragaoDoMar05,
        DragaoDoMar06,
      ];
    } else if (
      window.location.pathname.replace("/", "") === "parque-estadual-do-coco"
    ) {
      return [
        ParqueDoCoco1,
        ParqueDoCoco2,
        ParqueDoCoco3,
        ParqueDoCoco4,
        ParqueDoCoco5,
        ParqueDoCoco6,
      ];
    } else if (
      window.location.pathname.replace("/", "") === "theatro-jose-de-Alencar"
    ) {
      return [
        TheatroJoseDeAlencar1,
        TheatroJoseDeAlencar2,
        TheatroJoseDeAlencar3,
        TheatroJoseDeAlencar4,
        TheatroJoseDeAlencar5,
      ];
    } else if (
      window.location.pathname.replace("/", "") ===
      "mercado-central-de-fortaleza"
    ) {
      return [
        MecardoCentral01,
        MecardoCentral02,
        MecardoCentral03,
        MecardoCentral04,
        MecardoCentral05,
      ];
    } else if (window.location.pathname.replace("/", "") === "arena-castelao") {
      return [
        ArenaCastelao01,
        ArenaCastelao02,
        ArenaCastelao03,
        ArenaCastelao04,
        ArenaCastelao05,
      ];
    }
    return [
      FeirinhaDaBeiraMar01,
      FeirinhaDaBeiraMar02,
      FeirinhaDaBeiraMar03,
      FeirinhaDaBeiraMar04,
      FeirinhaDaBeiraMar05,
    ];
  }

  return (
    <div className="flex justify-center gap-8 flex-wrap p-40">
      <h1 className="text-white text-3xl">
        {touristSpot.title && touristSpot.title}
      </h1>
      {touristSpot.content &&
        touristSpot.content.split("|").map((paragraph, index) => (
          <p className="text-white text-justify" key={index}>
            {paragraph}
          </p>
        ))}

      <div className="flex justify-center gap-8 flex-wrap py-5">
        {touristSpot.content &&
          showImage().map((img, index) => (
            <Image key={index} src={img} alt="" width={500} height={321} />
          ))}
      </div>
    </div>
  );
}
