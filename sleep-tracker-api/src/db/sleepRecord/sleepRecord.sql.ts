import { integer, numeric, pgTable, serial, date } from "drizzle-orm/pg-core";
import { user } from "../user/user.sql";

export const sleepRecord = pgTable("sleepRecord", {
  id: serial("id").primaryKey().notNull(),
  userId: integer("userId")
    .references(() => user.id)
    .notNull(),
  duration: numeric("duration", { precision: 4, scale: 2 }).notNull(),
  recordDate: date("recordDate").notNull(),
});
