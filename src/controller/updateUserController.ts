import { IncomingMessage, ServerResponse } from "http";
import { validate as uuidValidate } from "uuid";
import { updateUserService } from "../service";

export const updateUserController = (
  req: IncomingMessage,
  res: ServerResponse,
  userId: string
) => {
  if (!uuidValidate(userId)) {
    res.statusCode = 400;
    res.end("User ID is invalid");
    return;
  }

  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const { username, age, hobbies } = JSON.parse(body);
    const updatedUser = updateUserService(userId, username, age, hobbies);
    if (updatedUser) {
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(updatedUser));
    } else {
      res.statusCode = 404;
      res.end("User not found");
    }
  });
};
