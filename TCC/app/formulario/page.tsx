import Form from "@/components/form";
import { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Formulário",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Form />
      <div className="relative w-96 h-96 hidden md:block">
        <Image alt="Enfermeira com formulário em mãos" src="/forms.png" fill />
      </div>
    </main>
  );
}
