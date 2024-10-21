import { v4 as uuidv4 } from "uuid";
import { IUser, users } from "../db";

export const createUserService = (
  username: string,
  age: number,
  hobbies: string[]
): IUser => {
  const newUser: IUser = {
    id: uuidv4(),
    username,
    age,
    hobbies,
  };

  users.push(newUser);

  return newUser;
};
