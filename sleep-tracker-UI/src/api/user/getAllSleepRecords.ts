export const getAllSleepRecords = () =>
  fetch("http://localhost:3000/user/sleep-records", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
