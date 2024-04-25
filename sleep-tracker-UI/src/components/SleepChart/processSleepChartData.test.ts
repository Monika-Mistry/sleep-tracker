import { describe, it, expect } from "vitest";

import { processSleepChartData } from "./processSleepChartData";
import { Gender } from "../../types/SleepRecord";

describe("processSleepChartData", () => {
  it("should generate x-axis labels and y-axis data correctly", () => {
    const historyData = [
      {
        recordDate: "2022-01-01",
        duration: 8,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-02",
        duration: 7,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-03",
        duration: 6,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-04",
        duration: 5,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-05",
        duration: 4,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-06",
        duration: 3,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-07",
        duration: 2,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
    ];

    const expectedXAxisData = [
      "01/01/2022",
      "02/01/2022",
      "03/01/2022",
      "04/01/2022",
      "05/01/2022",
      "06/01/2022",
      "07/01/2022",
    ];

    const expectedSeriesData = [8, 7, 6, 5, 4, 3, 2];

    const result = processSleepChartData(historyData, new Date("2022-01-07"));

    expect(result.xAxisData).toEqual(expectedXAxisData);
    expect(result.seriesData).toEqual(expectedSeriesData);
  });

  it("should handle missing recordDate and duration correctly", () => {
    const historyData = [
      {
        recordDate: "2022-01-01",
        duration: 8,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-03",
        duration: 6,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
      {
        recordDate: "2022-01-05",
        duration: 4,
        name: "Scooby Doo",
        gender: "male" as Gender,
      },
    ];

    const expectedXAxisData = [
      "01/01/2022",
      "02/01/2022",
      "03/01/2022",
      "04/01/2022",
      "05/01/2022",
      "06/01/2022",
      "07/01/2022",
    ];

    const expectedSeriesData = [8, 0, 6, 0, 4, 0, 0];

    const result = processSleepChartData(historyData, new Date("2022-01-07"));

    expect(result.xAxisData).toEqual(expectedXAxisData);
    expect(result.seriesData).toEqual(expectedSeriesData);
  });
});
