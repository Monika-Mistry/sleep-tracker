import { Container } from "@mui/material";
import SleepRecordForm, {
  SleepRecordFormData,
} from "../components/SleepTrackerForm";
import { createSleepRecord } from "../api/sleepRecord/createSleepRecord";
import Layout from "../components/Layout";

const SleepRecordTracker = () => {
  const onSubmit = (record: SleepRecordFormData) => createSleepRecord(record);
  return (
    <Layout>
      <Container maxWidth="lg">
        <SleepRecordForm onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
};

export default SleepRecordTracker;
