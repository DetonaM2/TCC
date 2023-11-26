import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
import { setUserCookie } from "@/lib/auth";
import { jsonResponse } from "@/lib/utils";

const prisma = new PrismaClient();

interface PostBody {
  cpf: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const { cpf, password }: PostBody = await request.json();

  const result = await prisma.doctor.findFirst({
    where: {
      cpf,
      password: md5(password),
    },
  });
  if (!result) {
    return NextResponse.json({ error: "Médico não encontrado!" }, { status: 404 });
  }
  return await setUserCookie(jsonResponse(200, result), result);
}
