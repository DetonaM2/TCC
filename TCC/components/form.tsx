"use client";

import { useState } from "react";
import axios from "axios";
import Alert from "./alert";
import { useRouter } from "next/navigation";

export default function Form() {
  const [cpf, setCpf] = useState<string>();
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<boolean>();
  const [smoker, setSmoker] = useState<boolean>();
  const [hypertension, setHypertension] = useState<boolean>();
  const [diabetes, setDiabetes] = useState<boolean>();
  const [fat, setFat] = useState<boolean>();
  const [psychosocial, setPsychosocial] = useState<boolean>();
  const [healthy, setHealthy] = useState<boolean>();
  const [cholesterol, setCholesterol] = useState<boolean>();
  const [activity, setActivity] = useState<boolean>();
  const [alertType, setAlertType] = useState<"success" | "error">();
  const [alertText, setAlertText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <form onSubmit={e => e.preventDefault()} className="flex justify-center flex-col text-white font-medium gap-2">
      <div className="bg-back p-3 w-full h-full rounded-xl flex-col flex justify-between gap-1">
        <div className="bg-back w-full justify-between rounded-xl flex-1 px-2 flex items-center gap-1">
          <label>Insira seu CPF:</label>
          <input
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            type="number"
            className="bg-white text-black w-48 cursor-pointer rounded-xl my-1 text-center px-1"
          />
        </div>

        <div className="bg-back w-full justify-between rounded-xl flex-1 px-2 flex items-center gap-1">
          <label>Insira sua idade:</label>
          <input
            value={age}
            onChange={e => setAge(+e.target.value)}
            type="number"
            className="bg-white text-black w-48 cursor-pointer rounded-xl my-1 text-center px-1"
          />
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>Insira seu genero biológico:</label>
          <label className="flex gap-1">
            M
            <input
              checked={gender}
              onChange={() => setGender(true)}
              name="gender"
              type="radio"
              className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
            />
          </label>
          <label className="flex gap-1">
            F
            <input
              checked={gender === false}
              onChange={() => setGender(false)}
              name="gender"
              type="radio"
              className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
            />
          </label>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>É fumante:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={smoker}
                onChange={() => setSmoker(true)}
                name="smoker"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={smoker === false}
                onChange={() => setSmoker(false)}
                name="smoker"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>É hipertenso:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={hypertension}
                onChange={() => setHypertension(true)}
                name="hypertension"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={hypertension === false}
                onChange={() => setHypertension(false)}
                name="hypertension"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>É diabetico:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={diabetes}
                onChange={() => setDiabetes(true)}
                name="diabetes"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={diabetes === false}
                onChange={() => setDiabetes(false)}
                name="diabetes"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>Possui obesidade:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={fat}
                onChange={() => setFat(true)}
                name="fat"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={fat === false}
                onChange={() => setFat(false)}
                name="fat"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>Problemas psicossociais:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={psychosocial}
                onChange={() => setPsychosocial(true)}
                name="psychosocial"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={psychosocial === false}
                onChange={() => setPsychosocial(false)}
                name="psychosocial"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>Consumo alimentos saudáveis:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={healthy}
                onChange={() => setHealthy(true)}
                name="healthy"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={healthy === false}
                onChange={() => setHealthy(false)}
                name="healthy"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>Colesterol alto:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={cholesterol}
                onChange={() => setCholesterol(true)}
                name="cholesterol"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={cholesterol === false}
                onChange={() => setCholesterol(false)}
                name="cholesterol"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
          </div>
        </div>

        <div className="bg-back w-full rounded-xl flex-1 px-2 flex items-center gap-1 justify-between">
          <label>Pratica ativide fisica:</label>
          <div className="gap-1 flex">
            <label className="flex gap-1">
              Sim
              <input
                checked={activity}
                onChange={() => setActivity(true)}
                name="activity"
                type="radio"
                className="bg-white flex-1 cursor-pointer rounded-xl my-1 text-center px-1"
              />
            </label>
            <label className="flex gap-1">
              Não
              <input
                checked={activity === false}
                onChange={() => setActivity(false)}
                name="activity"
                type="radio"
                className="bg-white flex-1 rounded-xl cursor-pointer my-1 text-center px-1"
              />
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => {
          setLoading(true);
          axios
            .post("/api/form", {
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
            })
            .then(() => {
              setAlertText("Formulário enviado com êxito!");
              setAlertType("success");
            })
            .catch(() => {
              setAlertText("Preenchimento incorreto do formulário. Por favor, realize novamente!");
              setAlertType("error");
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        className="bg-back px-10 py-2 disabled:bg-back/40 hover:bg-back/90 rounded-xl cursor-pointer text-xl"
        disabled={loading}
      >
        Enviar Formulário
      </button>
      <Alert
        isOpen={!!alertType}
        type={alertType!}
        onClick={() => {
          setAlertType(undefined);
          setAlertText("");
          if (alertType === "success") {
            router.push("/");
          }
        }}
      >
        {alertText}
      </Alert>
    </form>
  );
}
