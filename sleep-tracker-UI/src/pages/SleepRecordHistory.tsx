import { Container } from "@mui/material";
import Layout from "../components/Layout";
import SleepRecordTable from "../components/SleepRecordTable";
import { useLoaderData } from "react-router-dom";
import { SleepRecord, UserSleepRecord } from "../types/SleepRecord";
import { getSleepRecordHistory } from "../api/sleepRecord/getSleepRecordHistory";
import { useState } from "react";
import SleepChart from "../components/SleepChart/SleepChart";

const SleepRecordHistory = () => {
  const [history, setHistory] = useState<SleepRecord[] | null>(null);
  const data = useLoaderData() as UserSleepRecord[];

  const handleRowSelect = (record: UserSleepRecord) => {
    getSleepRecordHistory(record.id)
      .then(async (response) => {
        setHistory(response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <SleepRecordTable sleepRecords={data} onRowSelect={handleRowSelect} />
        <SleepChart data={history} />
      </Container>
    </Layout>
  );
};

export default SleepRecordHistory;
