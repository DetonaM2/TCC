"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function CpfList() {
  const [list, setList] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/cpf")
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col ml-5 items-center">
      <span className="text-back font-semibold text-xl">Pacientes</span>
      <div className="bg-back w-72 h-[80%] text-white overflow-y-auto rounded-lg flex flex-col items-center font-semibold py-2 gap-2">
        <input
          onChange={e => setSearch(e.target.value)}
          placeholder="Filtro"
          className="text-center text-black rounded-lg"
        />
        {list
          .filter(item => item.includes(search))
          .map(item => (
            <Link className="hover:underline" href={`/resultados/${item}`} key={item}>
              {item}
            </Link>
          ))}
      </div>
    </div>
  );
}
