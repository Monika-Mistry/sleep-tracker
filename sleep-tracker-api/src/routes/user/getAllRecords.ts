import { Request, Response } from "express";

import { User } from "./../../db/index";

/**
 * Route handler to fetch all sleep records for users.
 */
export const getAllRecords = async (_req: Request, res: Response) => {
  try {
    const result = await User.recordsByUser();

    // Send the result as a response
    res.status(200).json(result);
  } catch (error) {
    // If validation fails or an error occurs, send an error response
    res.status(400);
  }
};
