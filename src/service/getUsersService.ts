import { IUser, users } from "../db";

export const getUsersService = (): IUser[] => {
  return users;
};
