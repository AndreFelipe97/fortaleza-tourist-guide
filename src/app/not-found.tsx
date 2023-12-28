import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white">404 - Página não encontrada</h1>
      <p className="text-white">A página que você procura não existe.</p>
    </div>
  );
};

export default NotFound;
