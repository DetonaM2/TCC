"use client";

import { useState } from "react";
import axios from "axios";
import Alert from "./alert";
import { useRouter } from "next/navigation";

export default function Login() {
  const [cpf, setCpf] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <form
        onSubmit={e => e.preventDefault()}
        className="bg-back font-medium text-white w-72 h-80 px-2 justify-center items-center flex flex-col gap-2 rounded-xl"
      >
        <span className="text-xl">Login</span>
        <div className="flex flex-col w-full">
          <label>CPF:</label>
          <input
            value={cpf}
            onChange={e => setCpf(e.target.value.replace(/\D/g, ""))}
            className="bg-white w-full text-black cursor-pointer rounded-lg my-1 px-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Insira sua Senha:</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="bg-white text-black w-full cursor-pointer rounded-lg my-1 px-1"
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            axios
              .post("/api/login", {
                cpf,
                password,
              })
              .then(() => {
                router.push("resultados");
              })
              .catch(error => {
                console.error(error);
                setIsVisible(true);
              });
          }}
          className="bg-back w-full py-2 mt-7 hover:bg-back/90 rounded-xl cursor-pointer text-xl border-white border-2"
        >
          Entrar
        </button>
      </form>
      <Alert
        isOpen={isVisible}
        type={"error"}
        onClick={() => {
          setIsVisible(false);
        }}
      >
        {"Médico não encontrado! Tente novamente"}
      </Alert>
    </>
  );
}
