import { users } from "../db";

export const deleteUserService = (userId: string): boolean => {
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }

  return false;
};
