import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const GENDER = ["female", "male", "non-binary", "other"] as const;

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  gender: text("gender", { enum: GENDER }).notNull(),
});
