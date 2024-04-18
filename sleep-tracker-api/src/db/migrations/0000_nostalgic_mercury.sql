CREATE TABLE IF NOT EXISTS "sleepRecord" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"duration" numeric(2, 2) NOT NULL,
	"recordDate" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"gender" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sleepRecord" ADD CONSTRAINT "sleepRecord_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
