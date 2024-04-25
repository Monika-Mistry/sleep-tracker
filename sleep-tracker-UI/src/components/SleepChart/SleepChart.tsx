import { EChartsOption } from "echarts";
import { SleepRecord } from "../../types/SleepRecord";
import ReactBarChart from "../BarChart";
import { useEffect, useState } from "react";
import { processSleepChartData } from "./processSleepChartData";

type SleepChartProps = { data: SleepRecord[] | null };
const SleepChart = ({ data }: SleepChartProps) => {
  const [option, setOption] = useState<EChartsOption | null>(null);

  useEffect(() => {
    if (data) {
      const { xAxisData, seriesData } = processSleepChartData(data);

      setOption({
        title: {
          text: "Sleep over the past 7 days",
        },
        tooltip: {},
        xAxis: {
          name: "Date",
          type: "category",
          data: xAxisData,
          nameLocation: "middle",
          nameTextStyle: {
            fontWeight: "bold",
            padding: 16,
          },
        },
        yAxis: {
          type: "value",
          name: "Sleep (hours)",
          nameLocation: "middle",
          nameTextStyle: {
            fontWeight: "bold",
            padding: 16,
          },
        },
        series: [
          {
            name: "Duration",
            type: "bar",
            data: seriesData,
          },
        ],
      });
    }
  }, [data]);

  return (
    option && (
      <div style={{ marginTop: "2rem" }}>
        <ReactBarChart option={option} />
      </div>
    )
  );
};

export default SleepChart;
