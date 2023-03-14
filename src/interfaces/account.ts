import { IComment } from "./comments";

export interface IUserAccountInfo {
  isAdmin: boolean;
  id: string;
  username: string;
  avatar?: string;
  name?: string;
  surname?: string;
  registrationDate: Date;
  comments?: IComment[];
}
