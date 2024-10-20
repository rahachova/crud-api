import { IncomingMessage, ServerResponse } from "http";
import { getUsersService } from "../service";

export const getUsersController = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const users = getUsersService();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(users));
};
