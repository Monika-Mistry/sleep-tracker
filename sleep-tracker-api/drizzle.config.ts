import type { Config } from "drizzle-kit";

export default {
  out: "./src/db/migrations/",
  schema: "./src/**/*.sql.ts",
  verbose: true,
  strict: true,
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://sleepy:SecurePassword123@127.0.0.1:5432/sleep-tracker",
  },
} satisfies Config;
