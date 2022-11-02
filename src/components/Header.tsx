import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-3
    bg-teal-100
    text-gray-500
    "
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact Me!</NavLink>
    </nav>
  );
}
