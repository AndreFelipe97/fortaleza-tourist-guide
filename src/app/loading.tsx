import React from "react";
import { Loading as LoadingComponent } from "@/components/loading";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <LoadingComponent />
    </div>
  );
};

export default Loading;
