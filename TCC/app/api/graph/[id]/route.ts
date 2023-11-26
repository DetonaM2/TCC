import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface Params {
  params: { id: string };
}

export async function GET(_: any, { params }: Params) {
  const { id } = params;
  const result = await prisma.users.findUnique({
    where: { id: +id },
  });

  if (!result) {
    return NextResponse.json({ error: "Resultados não encontrados!" }, { status: 404 });
  }

  const resultList = await prisma.users.findMany({
    where: {
      cpf: result.cpf,
    },
    take: 10,
  });

  if (!resultList || !resultList.length) {
    return NextResponse.json({ error: "Resultados não encontrados!" }, { status: 404 });
  }

  return NextResponse.json({ current: result.result, line: resultList.map(item => item.result * 100) });
}
