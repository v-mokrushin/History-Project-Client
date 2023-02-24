import bcrypt from "bcryptjs";

export interface IUser {
  id: string;
  username: string;
  passwordHash: string;
  avatar: string;
  name: string;
  surname: string;
  registrationDate: string;
}

class UserAccounts {
  public data: IUser[] = [
    {
      id: "496b62cb-2052-4410-b1c0-467a9aa257c0",
      passwordHash: "metal",
      // passwordHash:
      //   "$2a$10$6TdhLfMMM/hbyPQ9r4E.Bu/eIdmx1HKB8YEeI63AaS7CBKmArqBLm",
      username: "xvadim",
      avatar: "/images/test/vadim.jpg",
      name: "Вадим",
      surname: "Мокрушин",
      registrationDate: "20.02.2023",
    },
  ];

  public login(username: string, passwordHash: string): IUser | undefined {
    const response = this.data.find((user) => user.username === username);
    if (response?.passwordHash === passwordHash) return response;
    return undefined;
  }
}

export const userAccounts = new UserAccounts();
