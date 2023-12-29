"use client";

import { LoginWithGoogle } from "@/components/LoginWithGoogle";
import { registerContactUser } from "@/services/registerContactUser";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import Loading from "../loading";
import { useEffect, useState } from "react";

export default function Spot() {
  const router = useRouter();
  const { data, status } = useSession();
  const [state, formAction] = useFormState(registerContactUser, {});
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.name) {
      router.push("/");
    }
  }, [router, state.name]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-white text-4xl">Entre com seu e-mail do google</h1>
        <p className="text-white">
          Com isso poderemos entrar em contato com você o mais rápido possível
        </p>
        <LoginWithGoogle />
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col gap-8 flex-wrap ml-5 mr-5 mt-2 md:p-40">
      <h1 className="text-white text-xl md:text-3xl">Fale conosco</h1>
      <form
        className="flex justify-center flex-col gap-8 flex-wrap"
        action={formAction}
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Nome
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 md:justify-between">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="fulano@tal.com"
              className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="digite seu telefone"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Conte-nos sobre o que você deseja saber"
            className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            rows={10}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="text-white hover:text-slate-900 hover:bg-white rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-none bg-none"
            onClick={() => router.push("/")}
          >
            Voltar
          </button>
          <button
            disabled={pending}
            className="text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
