import { Request, Response, NextFunction } from "express";
import { ApiError } from "../helpers/ApiErrors";

export default function errorMiddleware(
  err: Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction) {
  if (!err.code) {
    return res.status(500).json({ message: 'Internal server error' })
  };

  return res.status(err.code).json({ message: err.message });
}
