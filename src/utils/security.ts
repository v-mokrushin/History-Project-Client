import bcrypt from "bcryptjs";

export function hash(password: string): string {
  return bcrypt.hashSync(password);
}
