import { El } from "../../utils/El.js";

export function Header() {
  return El({
    element: "h1",
    children: "USERS",
    className: "text-center text-3xl bg-blue-500 p-5 text-white"
  });
}
