// This solution is based on: https://youtu.be/SnxAq9ktyuo?t=1217

export class ApiError extends Error {
  public readonly code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}