import React from "react";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LoginWithGoogle: React.FC = () => {
  return (
    <button
      className="flex justify-center items-center gap-2 h-9 w-56 rounded-lg bg-orange-500 text-white"
      onClick={() => signIn("google")}
    >
      <FaGoogle /> Login com o google
    </button>
  );
};

export { LoginWithGoogle };
