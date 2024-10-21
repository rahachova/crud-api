import { IncomingMessage, ServerResponse } from "http";
import { validate as uuidValidate } from "uuid";
import { deleteUserService } from "../service";

export const deleteUserController = (
  req: IncomingMessage,
  res: ServerResponse,
  userId: string
) => {
  if (!uuidValidate(userId)) {
    res.statusCode = 400;
    res.end("User ID is invalid");
    return;
  }

  const isDeleted = deleteUserService(userId);
  if (isDeleted) {
    res.statusCode = 204;
    res.setHeader("Content-Type", "application/json");
    res.end();
  } else {
    res.statusCode = 404;
    res.end("User not found");
  }
};
