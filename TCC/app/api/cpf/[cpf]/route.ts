import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface Params {
  params: { cpf: string };
}

export async function GET(_: any, { params }: Params) {
  const { cpf } = params;
  const result = await prisma.users.findMany({
    where: { cpf },
  });

  if (!result) {
    return NextResponse.json({ error: "Resultados não encontrados!" }, { status: 404 });
  }
  return NextResponse.json(result);
}
