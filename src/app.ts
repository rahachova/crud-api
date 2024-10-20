import { IncomingMessage, ServerResponse } from "http";
import { router } from "./router";

export const app = (req: IncomingMessage, res: ServerResponse) => {
  try {
    router(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.statusCode = 500;
      res.end(error.toString());
    } else {
      res.end("Unknown error caught");
    }
  }
};
