import { EChartsOption } from "echarts";
import { SleepRecord } from "../types/SleepRecord";
import ReactBarChart from "./BarChart";
import { useEffect, useState } from "react";

type SleepChartProps = { data: SleepRecord[] | null };
const SleepChart = ({ data }: SleepChartProps) => {
  const [option, setOption] = useState<EChartsOption | null>(null);

  const processData = (historyData: SleepRecord[]) => {
    // Initialize an object to store sleep duration for each date
    const sleepData: Record<string, number> = {};

    // Loop through the data and populate sleepData
    historyData.forEach((item) => {
      const duration = parseFloat(String(item.duration));

      if (item.recordDate) {
        const date = new Date(item.recordDate).toLocaleDateString();
        // Store the duration for the date
        sleepData[date] = duration;
      }
    });

    // Generate x-axis labels (last 7 days)
    const today = new Date();
    const xAxisData = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      xAxisData.push(date.toLocaleDateString());
    }

    // Generate y-axis data
    const seriesData = xAxisData.map((date) => sleepData[date] || 0);

    return {
      xAxisData,
      seriesData,
    };
  };

  useEffect(() => {
    if (data) {
      const { xAxisData, seriesData } = processData(data);

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
