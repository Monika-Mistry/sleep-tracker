import { Backdrop, CircularProgress, Container, Snackbar } from "@mui/material";
import SleepRecordForm, {
  SleepRecordFormData,
} from "../components/SleepTrackerForm";
import { createSleepRecord } from "../api/sleepRecord/createSleepRecord";
import Layout from "../components/Layout";
import { Gender } from "../types/SleepRecord";
import { useState } from "react";

const SleepRecordTracker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const onSubmit = (record: SleepRecordFormData, onSuccessCb: () => void) => {
    setIsLoading(true);
    createSleepRecord({ ...record, gender: record.gender as Gender })
      .then(() => {
        setIsLoading(false);
        setToastMessage("Sleep record submitted successfully!");
        setIsToastOpen(true);
        onSuccessCb();
      })
      .catch(() => {
        setIsLoading(false);
        setToastMessage("Uh oh! Something went wrong. Please try again.");
        setIsToastOpen(true);
      });
  };

  return (
    <Layout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isToastOpen}
        onClose={() => setIsToastOpen(false)}
        message={toastMessage}
        key={"form-submission-toast"}
      />
      <Container maxWidth="lg">
        <SleepRecordForm onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
};

export default SleepRecordTracker;
