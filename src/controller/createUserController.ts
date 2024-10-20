import { IncomingMessage, ServerResponse } from "http";
import { createUserService } from "../service";
import { handleError } from "../utils";

export const createUserController = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    try {
      const { username, age, hobbies } = JSON.parse(body);
      if (username && age && hobbies) {
        const newUser = createUserService(username, age, hobbies);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(newUser));
      } else {
        res.statusCode = 400;
        res.end("New user should contain username, age and hobbies");
      }
    } catch (error) {
      handleError(res, error);
    }
  });
};
