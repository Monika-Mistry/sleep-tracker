/**
 * Fetches all sleep records for a user.
 * @returns A Promise that resolves to the JSON response containing the sleep records.
 */
export const getAllSleepRecords = () =>
  fetch("http://localhost:3000/user/sleep-records", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
