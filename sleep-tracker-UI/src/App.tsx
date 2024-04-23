import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import SleepRecordTracker from "./pages/SleepRecordTracker";
import SleepRecordHistory from "./pages/SleepRecordHistory";
import { getAllSleepRecords } from "./api/user/getAllSleepRecords";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "track",
      element: <SleepRecordTracker />,
    },
    {
      path: "history",
      element: <SleepRecordHistory />,
      loader: () => getAllSleepRecords(),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
