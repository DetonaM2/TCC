"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Return() {
  const router = useRouter();
  const pathName = usePathname();

  if (pathName === "/") {
    return <></>;
  }

  return (
    <button
      onClick={() => router.back()}
      className="text-back hover:underline font-semibold absolute z-10 top-5 left-5"
    >
      Voltar
    </button>
  );
}
