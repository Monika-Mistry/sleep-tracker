import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const db = async () => {
  const connection = postgres(
    "postgres://sleepy:SecurePassword123@127.0.0.1:5432/sleep-tracker"
  );

  return drizzle(connection);
};
