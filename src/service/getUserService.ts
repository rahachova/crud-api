import { IUser, users } from "../db";

export const getUserService = (userId: string): IUser | undefined => {
  return users.find(({ id }) => id === userId);
};
