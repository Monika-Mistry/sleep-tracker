import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Typography variant="h3" align="center">
        Track Your Zzz's: Snooze smarter, not harder!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Unlock Your Dream Potential, View Your Sleep History, and Wake Up
        Refreshed Every Day!
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
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
