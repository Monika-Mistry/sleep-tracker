import { Express } from "express";
import { create } from "./sleep-record/create";
import { getAllRecords } from "./user/getAllRecords";
import { history } from "./user/history";

export const routes = (app: Express) => {
  app.post("/sleep-record", create);
  app.get("/user/sleep-records", getAllRecords);
  app.get("/user/:id/history", history);
};
