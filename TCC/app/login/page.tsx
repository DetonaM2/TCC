import Image from "next/image";
import Login from "@/components/login";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="left-28 w-96 h-96 absolute hidden md:block">
        <Image alt="Médico segurando prancheta" src="/login.png" fill />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Login />
      </div>
    </main>
  );
}
