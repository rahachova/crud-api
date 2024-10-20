import { ServerResponse } from "http";

export const handleError = (res: ServerResponse, error: unknown) => {
  if (error instanceof Error) {
    res.statusCode = 500;
    res.end(error.toString());
  } else {
    res.end("Unknown error caught");
  }
};
