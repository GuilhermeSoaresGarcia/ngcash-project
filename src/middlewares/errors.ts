import { Request, Response, NextFunction } from "express";

export default function errorMiddleware(err: IError, _req: Request, res: Response, _next: NextFunction) {
  const { message, code } = err;

  if (code) {
    return res.status(code).json({ message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

