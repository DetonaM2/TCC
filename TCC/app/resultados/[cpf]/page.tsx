import Form from "@/components/form";
import { Metadata } from "next";
import Image from "next/image";
import CpfList from "@/components/cpflist";
import DateList from "@/components/datelist";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resultados",
};

interface Props {
  params: { cpf: string };
}

export default function Home({ params }: Props) {
  return (
    <main className="flex min-h-screen h-screen pt-20">
      <CpfList />
      <DateList cpf={params.cpf} />
    </main>
  );
}
