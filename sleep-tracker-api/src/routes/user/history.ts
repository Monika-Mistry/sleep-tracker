import { Request, Response } from "express";

import { User } from "./../../db/index";

/**
 *  Route handler to fetch sleep history for a user by ID.
 */
export const history = async (req: Request, res: Response) => {
  try {
    const validatedData = await User.Info.pick({ id: true }).parse(req.params);

    const result = await User.fromIdHistory(validatedData);

    // Send the result as a response
    res.status(200).json(result);
  } catch (error) {
    // If validation fails or an error occurs, send an error response
    res.status(400);
  }
};
