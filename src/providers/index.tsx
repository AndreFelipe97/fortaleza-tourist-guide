"use client";

import { client } from "@/services/prismic";
import { PrismicProvider } from "@prismicio/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <PrismicProvider client={client}>{children}</PrismicProvider>;
};

export { Providers };
