import { IncomingMessage, ServerResponse } from "http";
import { getUserService } from "../service";
import { validate as uuidValidate } from "uuid";

export const getUserController = (
  req: IncomingMessage,
  res: ServerResponse,
  userId: string
) => {
  if (!uuidValidate(userId)) {
    res.statusCode = 400;
    res.end("User ID is invalid");
    return;
  }

  const user = getUserService(userId);
  if (user) {
    req.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end("User not found");
  }
};
