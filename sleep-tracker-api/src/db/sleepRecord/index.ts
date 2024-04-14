import { z } from "zod";
import { createSelectSchema } from "drizzle-zod";

import { sleepRecord } from "./sleepRecord.sql";
import { zod } from "../utils/zod";
import { db } from "../../drizzle";
import { Transaction } from "../utils/transaction";
import { Info as UserInfo } from "../user";
import { User } from "../index";

/**
 * Select schema for the "sleepRecord" table.
 * @type {import("zod").ZodSchema}
 */
export const Info = createSelectSchema(sleepRecord);

/**
 * Type alias for the inferred type of Info schema.
 * @typedef {import("zod").infer<typeof Info>} Info
 */
export type Info = z.infer<typeof Info>;

/**
 * Schema for creating a new sleep record.
 * @param {object} input - Input data for creating a new sleep record.
 * @param {number} input.quantity - The quantity of sleep.
 * @param {string} input.name - The name of the user.
 * @param {string} input.gender - The gender of the user.
 * @returns A promise that resolves with the result of the insert operation.
 */
export const create = zod(
  Info.pick({ quantity: true }).merge(
    UserInfo.pick({ name: true, gender: true })
  ),
  async (input) => {
    const database = await db();
    return await database.transaction(async (tx: Transaction) => {
      try {
        // Create a new user if not exists and get its ID
        const userId = await User.create({
          name: input.name,
          gender: input.gender,
        });

        if (userId?.[0]) {
          // Insert a new sleep record with the obtained user ID
          return await tx
            .insert(sleepRecord)
            .values({ quantity: input.quantity, userId: userId[0].id })
            .returning({ id: sleepRecord.id }) // Returning the ID of the inserted record
            .execute();
        }
        return null;
      } catch (e) {
        await tx.rollback();
        return;
      }
    });
  }
);
