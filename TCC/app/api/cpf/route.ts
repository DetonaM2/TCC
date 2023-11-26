import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const result = await prisma.users.findMany({
    distinct: ["cpf"],
  });

  if (!result) {
    return NextResponse.json({ error: "Paciente não encontrado!" }, { status: 404 });
  }
  return NextResponse.json(result.map(item => item.cpf));
}
