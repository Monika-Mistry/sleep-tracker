import { SleepRecord } from "../../types/SleepRecord";

/**
 * Processes sleep chart data to generate x-axis labels and y-axis data.
 *
 * @param historyData - An array of sleep records
 * @returns x-axis labels and y-axis data.
 */
export const processSleepChartData = (
  historyData: SleepRecord[],
  todayDate?: Date
) => {
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
  const today = todayDate || new Date();
  const xAxisData: string[] = [];
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
