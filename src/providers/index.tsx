"use client";

import { client } from "@/lib/prismic";
import { PrismicProvider } from "@prismicio/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <PrismicProvider client={client}>{children}</PrismicProvider>
    </SessionProvider>
  );
};

export { Providers };
