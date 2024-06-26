import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const sql = postgres(
  "postgres://sleepy:SecurePassword123@127.0.0.1:5432/sleep-tracker",
  { max: 1 }
);

const db = drizzle(sql);

await migrate(db, {
  migrationsFolder: "./src/db/migrations/",
});

await sql.end();
