export interface IUser {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const users: IUser[] = [
  {
    id: "aa978d28-69aa-4ed7-b282-8f6b40f8c3c4",
    username: "John",
    age: 29,
    hobbies: ["embroidery"],
  },
];
