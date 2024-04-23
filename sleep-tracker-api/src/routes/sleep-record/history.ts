import { Request, Response } from "express";

import { SleepRecord } from "../../db/index";

/**
 *  Route handler to fetch sleep history for a user by ID.
 */
export const history = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const validatedData = await SleepRecord.Info.pick({ userId: true }).parse({
      userId: Number(id),
    });

    const result = await SleepRecord.fromUserIdHistory(validatedData);

    // Send the result as a response
    res.status(200).json(result);
  } catch (error) {
    // If validation fails or an error occurs, send an error response
    res.status(400);
  }
};
