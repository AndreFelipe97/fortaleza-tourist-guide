"use client";
import { CardLocale } from "@/components/cardLocale";
import { Loading } from "@/components/loading";
import { useCallback, useEffect, useState } from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

interface TouristSpot {
  uid: string;
  title: string;
  imageOne: string;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [spots, setSpots] = useState<TouristSpot[]>([]);

  const [documents] = useAllPrismicDocumentsByType("attraction");

  const loadSpots = useCallback(async () => {
    try {
      const spots = documents?.map((spot) => {
        return {
          uid: spot.uid,
          title: spot.data.title[0].text,
          imageOne: spot.data.imageone.url,
        };
      });

      setSpots(spots as TouristSpot[]);
      console.log(documents);
    } catch (error) {
      console.log(error);
    }
  }, [documents]);

  useEffect(() => {
    setLoading(true);
    loadSpots();
    setLoading(false);
  }, [loadSpots]);

  useEffect(() => {
    setLoading(true);
    loadSpots();
    setLoading(false);
  }, [documents, loadSpots]);

  if (loading) {
    return (
      <div className="flex justify-center gap-8 flex-wrap py-5">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-8 flex-wrap py-5">
      {spots &&
        spots &&
        spots.map((spot) => (
          <CardLocale
            key={spot.title}
            label={spot.title}
            img={spot.imageOne}
            page={spot.uid}
          />
        ))}
    </div>
  );
}
