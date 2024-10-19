import { IncomingMessage, ServerResponse } from "http";

export const getUsersController = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  console.log("get users");
};
