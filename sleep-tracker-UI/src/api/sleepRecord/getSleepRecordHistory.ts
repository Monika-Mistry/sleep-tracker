/**
 * Retrieves the sleep record history for a user.
 * @param id - The ID of the user.
 * @returns A Promise that resolves to the sleep record history as JSON.
 */
export const getSleepRecordHistory = (id: number) =>
  fetch(`http://localhost:3000/user/${id}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
