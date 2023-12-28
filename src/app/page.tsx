import { CardLocale } from "@/components/cardLocale";
import { Loading } from "@/components/loading";
import { useCallback, useEffect, useState } from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { getPrismicAPI } from "@/services/prismicApi";

export default async function Home() {
  const spots = await getPrismicAPI();

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
