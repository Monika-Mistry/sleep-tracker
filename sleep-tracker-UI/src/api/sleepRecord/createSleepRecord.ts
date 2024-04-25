/**
 * Creates a new sleep record.
 * @param {SleepRecord} record - The sleep record to be created.
 * @returns {Promise<any>} - A promise that resolves to the response JSON.
 */
import { SleepRecord } from "../../types/SleepRecord";

export const createSleepRecord = (record: SleepRecord) =>
  fetch("http://localhost:3000/sleep-record", {
    method: "POST",
    body: JSON.stringify(record),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
