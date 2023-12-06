import { Link, NavLink } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";

function Header() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogout();
  return (
    <div className="navbar container">
      <Link to="/">
        <h1>Header</h1>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <p>Hello {user.displayName}</p>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
}

export default Header;
