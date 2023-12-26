"use client";

import { ParqueDoCoco6 } from "@/assets/imgs/ParqueDoCoco";
import { DragaoDoMar04 } from "@/assets/imgs/dragaoDoMar";
import { TheatroJoseDeAlencar5 } from "@/assets/imgs/theatroJoseDeAlencar";
import { MecardoCentral05 } from "@/assets/imgs/mercadoCentral";
import { ArenaCastelao03 } from "@/assets/imgs/arenaCastelão";
import { FeirinhaDaBeiraMar01 } from "@/assets/imgs/feirinhaBeiraMar";
import { CardLocale } from "@/components/cardLocale";
import { Loading } from "@/components/loading";
import { getTouristSpots } from "@/services/files";
import { useEffect, useState } from "react";

interface TouristSpot {
  title: string;
  slug: string;
  content: string;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [touristSpots, setTouristSpots] = useState<TouristSpot[]>([]);
  getTouristSpots();

  async function getSpots() {
    const spots = await getTouristSpots();
    setTouristSpots(spots);
  }

  useEffect(() => {
    setLoading(true);

    getSpots();

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  function mainBanner(spot: TouristSpot) {
    if (spot.slug === "centro-dragão-do-mar-de-arte-e-cultura") {
      return DragaoDoMar04;
    } else if (spot.slug === "parque-estadual-do-coco") {
      return ParqueDoCoco6;
    } else if (spot.slug === "theatro-jose-de-Alencar") {
      return TheatroJoseDeAlencar5;
    } else if (spot.slug === "mercado-central-de-fortaleza") {
      return MecardoCentral05;
    } else if (spot.slug === "arena-castelao") {
      return ArenaCastelao03;
    }
    return FeirinhaDaBeiraMar01;
  }

  return (
    <>
      <div className="flex justify-center gap-8 flex-wrap py-5">
        {touristSpots.map((spot: TouristSpot) => (
          <CardLocale
            key={spot.title}
            label={spot.title}
            img={mainBanner(spot)}
            page={`/${spot.slug}`}
          />
        ))}
      </div>
    </>
  );
}
