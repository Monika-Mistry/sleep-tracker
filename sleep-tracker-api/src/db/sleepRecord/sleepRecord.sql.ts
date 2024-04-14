import {
  integer,
  numeric,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { user } from "../user/user.sql";

export const sleepRecord = pgTable("user", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => user.id),
  quantity: numeric("quantity", { precision: 2, scale: 2 }).notNull(),
  recordDate: timestamp("recordDate").notNull().defaultNow(),
});
