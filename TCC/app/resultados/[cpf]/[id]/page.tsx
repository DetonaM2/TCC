import { Metadata } from "next";
import CpfList from "@/components/cpflist";
import DateList from "@/components/datelist";
import Graph from "@/components/graph";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resultados",
};

interface Props {
  params: {
    cpf: string;
    id: number;
  };
}

export default function Home({ params }: Props) {
  return (
    <main className="flex min-h-screen h-screen pt-20">
      <CpfList />
      <DateList cpf={params.cpf} />
      <Graph cpf={params.cpf} id={params.id} />
    </main>
  );
}
