import { v4 as uuidv4 } from "uuid";
import { IUser, users } from "../db";

export const updateUserService = (
  userId: string,
  username: string,
  age: number,
  hobbies: string[]
): IUser | void => {
  const userToUpdate = users.find(({ id }) => id === userId);

  if (!userToUpdate) {
    return;
  }

  if (username) {
    userToUpdate.username = username;
  }

  if (age) {
    userToUpdate.age = age;
  }

  if (hobbies) {
    userToUpdate.hobbies = hobbies;
  }

  return userToUpdate;
};
