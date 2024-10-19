import { IncomingMessage, ServerResponse } from "http";
import {
  getUsersController,
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "./controller";

export const router = (req: IncomingMessage, res: ServerResponse) => {
  let url = req.url;
  const method = req.method;

  if (url?.endsWith("/")) {
    url = url.slice(0, -1);
  }

  if (url === "/api/users") {
    switch (method) {
      case "GET":
        getUsersController(req, res);
        break;
      case "POST":
        createUserController(req, res);
        break;
      default:
        break;
    }
  } else if (url?.startsWith("/api/users")) {
    const userId = url.split("/")[3];
    switch (method) {
      case "GET":
        getUserController(req, res, userId);
        break;
      case "PUT":
        updateUserController(req, res, userId);
        break;
      case "DELETE":
        deleteUserController(req, res, userId);
        break;

      default:
        break;
    }
  }
};
