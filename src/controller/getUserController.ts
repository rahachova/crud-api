import { IncomingMessage, ServerResponse } from "http";

export const getUserController = (
  req: IncomingMessage,
  res: ServerResponse,
  userId: string
) => {
  console.log(userId);
};
