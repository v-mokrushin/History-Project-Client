import { Pages } from "constants/pages";

export function checkToShowSolidHeader(path: string) {
  if (Pages.getPathLength(path) === 4) return true;
  if (Pages.getPathLength(path) === 6) return true;

  const paths = Pages.getPathnamesArray(path);
  if (paths[1] === "/gallery") return true;
  if (paths[1] === "/account") return true;
  if (paths[1] === "/account") return true;
}
