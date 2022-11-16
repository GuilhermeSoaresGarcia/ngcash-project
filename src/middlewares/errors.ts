import { Request, Response, NextFunction } from "express";
import { ApiError } from "../helpers/api-errors";

export default function errorMiddleware(
  err: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction) {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : 'Internal server error';
  return res.status(statusCode).json({ message })
};

