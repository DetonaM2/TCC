"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { LineChart, PieChart, pieArcLabelClasses } from "@mui/x-charts";

interface Props {
  id: number;
}

export default function Graph({ id }: Props) {
  const [current, setCurrent] = useState<number>(0);
  const [line, setLine] = useState<number[]>([0]);
  const data = [
    { id: 0, value: 25, label: "Baixo", color: "green" },
    { id: 1, value: 25, label: "Moderado", color: "yellow" },
    { id: 2, value: 25, label: "Alto", color: "orange" },
    { id: 3, value: 25, label: "Muito alto", color: "red" },
  ];

  const textColor = useMemo(() => {
    switch (true) {
      case current < 0.25:
        return "text-green-500";
      case current < 0.5:
        return "text-yellow-500";
      case current < 0.75:
        return "text-orange-500";
      default:
        return "text-red-500";
    }
  }, [current]);

  useEffect(() => {
    axios
      .get(`/api/graph/${id}`)
      .then(response => {
        setCurrent(response.data.current);
        setLine(response.data.line);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="flex w-[50%] flex-col ml-5 items-center">
      <span className="text-back font-semibold text-xl">Resultados</span>
      <div className="bg-back text-white w-full h-[80%] ml-5 overflow-y-auto rounded-lg flex flex-col items-center font-semibold py-2 gap-2">
        <div className="flex w-[70%] items-center justify-center">
          <span className={`font-semibold bg-white rounded-lg text-xl ${textColor}`}>
            {(current * 100).toFixed(2)}%
          </span>
          <PieChart
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontSize: 50,
              },
            }}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 20,
                  fill: "white",
                },
              },
            }}
            series={[
              {
                arcLabel: item => {
                  switch (true) {
                    case item.label === "Baixo" && current < 0.25:
                      return "•";
                    case item.label === "Moderado" && current < 0.5 && current >= 0.25:
                      return "•";
                    case item.label === "Alto" && current < 0.75 && current >= 0.5:
                      return "•";
                    case item.label === "Muito alto" && current >= 0.75:
                      return "•";
                    default:
                      return "";
                  }
                },
                data,
                valueFormatter: value => `${value.value}%`,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              },
            ]}
            height={200}
          />
        </div>

        <LineChart
          xAxis={[{ data: [...Array(Math.max(4, line.length)).keys()].map(i => i + 1) }]}
          yAxis={[{ max: 100, min: 0 }]}
          sx={{
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "white",
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "white",
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "white",
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "white",
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
              stroke: "white",
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-tick": {
              stroke: "white",
            },
            "& .MuiChartsAxisHighlight-root": {
              stroke: "white",
              fill: "white",
            },
          }}
          series={[
            {
              data: line,
              showMark: true,
              color: "white",
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
