import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface PostBody {
  cpf: string;
  age: number;
  gender: boolean;
  smoker: boolean;
  hypertension: boolean;
  diabetes: boolean;
  fat: boolean;
  psychosocial: boolean;
  healthy: boolean;
  cholesterol: boolean;
  activity: boolean;
}

export async function POST(request: NextRequest) {
  const {
    cpf,
    age,
    gender,
    smoker,
    hypertension,
    diabetes,
    fat,
    psychosocial,
    healthy,
    cholesterol,
    activity,
  }: PostBody = await request.json();

  if (cpf.length !== 11) {
    return NextResponse.json({ error: "Preenchimento incorreto do formulário." }, { status: 400 });
  }
  if (age > 120 || age < 0) {
    return NextResponse.json({ error: "Preenchimento incorreto do formulário." }, { status: 400 });
  }

  const result = await axios
    .get(
      `${
        process.env.AI_API_URL
      }?age=${age}&gender=${+gender}&smoker=${+smoker}&hypertension=${+hypertension}&diabetes=${+diabetes}&fat=${+fat}&psychosocial=${+psychosocial}&healthy=${+healthy}&cholesterol=${+cholesterol}&activity=${+activity}`,
    )
    .then(response => response)
    .catch(error => error.response);

  if (result.status !== 200) {
    return NextResponse.json({ error: "Falha de cálculo." }, { status: 500 });
  }

  const dbResponse = await prisma.users.create({
    data: {
      cpf,
      age,
      gender,
      smoker,
      hypertension,
      diabetes,
      fat,
      psychosocial,
      healthy,
      cholesterol,
      activity,
      result: result.data,
    },
  });
  return NextResponse.json(dbResponse);
}
