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

  const resultAll = await prisma.users.findMany({
    distinct: ["cpf"],
    orderBy: { createdAt: "desc" },
  });

  if (!resultAll) {
    return NextResponse.json({ error: "Resultados não encontrados!" }, { status: 404 });
  }

  const green = { value: 0, label: "Baixo", color: "green" };
  const yellow = { value: 0, label: "Moderado", color: "yellow" };
  const orange = { value: 0, label: "Alto", color: "orange" };
  const red = { value: 0, label: "Muito Alto", color: "red" };

  for (const result of resultAll) {
    switch (true) {
      case result.result < 0.25:
        green.value += 100 / resultAll.length;
        break;
      case result.result < 0.5:
        yellow.value += 100 / resultAll.length;
        break;
      case result.result < 0.75:
        orange.value += 100 / resultAll.length;
        break;
      default:
        red.value += 100 / resultAll.length;
        break;
    }
  }

  return NextResponse.json({
    current: result.result,
    line: resultList.map(item => item.result * 100),
    pie: [green, yellow, orange, red],
  });
}
