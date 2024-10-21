import { IncomingMessage, ServerResponse } from "http";
import { router } from "./router";
import { handleError } from "./utils";

export const app = (req: IncomingMessage, res: ServerResponse) => {
  try {
    router(req, res);
  } catch (error) {
    handleError(res, error);
  }

  res.on("error", handleError);
  req.on("error", handleError);
};
