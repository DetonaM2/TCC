import Image from "next/image";
import Link from "next/link";
import ExpandingArrow from "@/components/expanding-arrow";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex relative min-h-screen items-center justify-evenly">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] items-center justify-center flex flex-col md:flex-row-reverse">
        <div>
          <Image alt="Enfermeira aplicando injeção em paciente" src="/Background1.png" width={350} height={350} />
        </div>
        <div className="flex mt-4 md:mt-0 flex-col items-center justify-center gap-4">
          <Link
            href="/login"
            className="min-w-[250px] min-h-[100px] group justify-center items-center rounded-xl flex space-x-1 bg-back shadow-sm ring-1 ring-gray-900/5 text-white text-xl font-medium hover:shadow-lg active:shadow-sm transition-all"
          >
            <p>Médico</p>
            <ExpandingArrow />
          </Link>
          <Link
            href="/formulario"
            className="min-w-[250px] min-h-[100px] group justify-center items-center rounded-xl flex space-x-1 bg-back shadow-sm ring-1 ring-gray-900/5 text-white text-xl font-medium hover:shadow-lg active:shadow-sm transition-all"
          >
            <p>Paciente</p>
            <ExpandingArrow />
          </Link>
        </div>
      </div>
    </main>
  );
}
