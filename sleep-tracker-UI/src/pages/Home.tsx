import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Typography variant="h1">Welcome to Sleep Tracker</Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Track your sleep to improve your health and well-being. Click below to
        add your sleep data or view historical sleep data.
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/track")}
          >
            Track your sleep
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/history")}
          >
            View Sleep Records
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
