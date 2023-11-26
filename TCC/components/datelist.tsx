"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { users } from "@prisma/client";

interface Props {
  cpf: string;
}

export default function DateList({ cpf }: Props) {
  const [list, setList] = useState<users[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get(`/api/cpf/${cpf}`)
      .then(response => {
        setList(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [cpf]);

  return (
    <div className="flex flex-col ml-5 items-center">
      <span className="text-back font-semibold text-xl">Exames</span>
      <div className="bg-back w-72 h-[80%] text-white ml-5 overflow-y-auto rounded-lg flex flex-col items-center font-semibold py-2 gap-2">
        <input
          onChange={e => setSearch(e.target.value)}
          placeholder="Filtro"
          className="text-center text-black rounded-lg"
        />
        {list
          .filter(item => new Date(item.createdAt).toLocaleString().includes(search))
          .map(item => (
            <Link className="hover:underline" href={`/resultados/${cpf}/${item.id}`} key={item.id}>
              {new Date(item.createdAt).toLocaleString()}
            </Link>
          ))}
      </div>
    </div>
  );
}
