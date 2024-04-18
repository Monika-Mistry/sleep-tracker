import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
