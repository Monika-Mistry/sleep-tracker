import { Request, Response } from "express";

import { SleepRecord, User } from "./../../db/index";

/**
 *  Route handler to create a new sleep record.
 */
export const create = async (req: Request, res: Response) => {
  try {
    const validatedData = await SleepRecord.Info.pick({ quantity: true })
      .merge(User.Info.pick({ name: true, gender: true }))
      .parse(req.body);

    const result = await SleepRecord.create(validatedData);

    // Send the result as a response
    res.status(201).json(result);
  } catch (error) {
    // If validation fails or an error occurs, send an error response
    res.status(400);
  }
};
