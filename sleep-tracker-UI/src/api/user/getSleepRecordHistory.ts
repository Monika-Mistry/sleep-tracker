export const getSleepRecordHistory = (id: number) =>
  fetch(`http://localhost:3000/user/${id}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
