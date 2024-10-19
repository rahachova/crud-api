import { IncomingMessage, ServerResponse } from "http";
import { router } from "./router";

export const app = (req: IncomingMessage, res: ServerResponse) => {
  router(req, res);
};
