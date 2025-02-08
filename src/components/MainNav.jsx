import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex gap-x-6 text-lg">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Lista personaggi</NavLink>
        </li>
      </ul>
    </nav>
  );
}
