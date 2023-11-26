import Form from "@/components/form";
import { Metadata } from "next";
import Image from "next/image";
import CpfList from "@/components/cpflist";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resultados",
};

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen pt-20">
      <CpfList />
    </main>
  );
}
