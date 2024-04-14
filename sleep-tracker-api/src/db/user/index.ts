import { z } from "zod";
import { createSelectSchema } from "drizzle-zod";
import { and, count, eq } from "drizzle-orm";

import { user } from "./user.sql";
import { zod } from "../utils/zod";
import { db } from "../../drizzle";
import { Transaction } from "../utils/transaction";
import { sleepRecord } from "./../sleepRecord/sleepRecord.sql";

/**
 * Select schema for the "user" table.
 * @type {import("zod").ZodSchema}
 */
export const Info = createSelectSchema(user);

/**
 * Type alias for the inferred type of Info schema.
 * @typedef {import("zod").infer<typeof Info>} Info
 */
export type Info = z.infer<typeof Info>;

/**
 * Schema for creating a new record in the "user" table.
 * @param {object} input - Input data for creating a new record.
 * @param {string} input.name - The name of the user.
 * @param {string} input.gender - The gender of the user.
 * @returns A promise that resolves with the result of the insert operation.
 */
export const create = zod(
  Info.pick({ name: true, gender: true }),
  async (input) => {
    const database = await db();
    return await database.transaction(async (tx: Transaction) => {
      try {
        // Check if a user with the same name and gender already exists
        const existingUser = await fromNameAndGender(input);

        if (existingUser.length > 0) {
          // Return existing user data if user already exists
          return existingUser;
        }
        // Inserting a new record into the "user" table
        return await tx
          .insert(user)
          .values(input)
          .returning({ id: user.id }) // Returning the ID of the inserted record
          .execute();
      } catch (e) {
        await tx.rollback();
        return;
      }
    });
  }
);

/**
 * Schema for querying a record from the "user" table by Name and gender.
 * @param {object} input - Input data for querying a record.
 * @param {string} input.name - The name of the user.
 * @param {string} input.gender - The gender of the user.
 * @returns A promise that resolves with the query result.
 */
export const fromNameAndGender = zod(
  Info.pick({ name: true, gender: true }),
  async (input) => {
    const database = await db();
    return await database
      .select({ id: user.id })
      .from(user)
      .where(and(eq(user.name, input.name), eq(user.gender, input.gender)))
      .limit(1)
      .execute();
  }
);

/**
 * Schema for querying user's sleep record history based on ID.
 * @param {object} input - Input data for querying user's history.
 * @param {number} input.id - The ID of the user.
 * @returns A promise that resolves with the query result.
 */
export const fromIdHistory = zod(Info.pick({ id: true }), async (input) => {
  const database = await db();
  return await database
    .select()
    .from(user)
    .where(eq(user.id, input.id))
    .leftJoin(sleepRecord, eq(user.id, sleepRecord.userId))
    .execute();
});

/**
 * Function to fetch records by user, including user's name, gender, and count of sleep records.
 * @returns A promise that resolves with the query result.
 */
export const recordsByUser = async () => {
  const database = await db();
  return await database
    .select({
      name: user.name,
      gender: user.gender,
      sleepRecords: count(sleepRecord.id),
    })
    .from(user)
    .fullJoin(sleepRecord, eq(user.id, sleepRecord.userId))
    .groupBy(user.id)
    .execute();
};
