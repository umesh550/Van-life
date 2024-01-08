import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const activeStyles = { color: "#ffae66", textDecoration: "underline" };

  return (
    <header className="header">
      <NavLink className="logo" to="/">
        #VANLIFE
      </NavLink>
      <nav className="nav-links">
        <NavLink
          style={(obj) => (obj.isActive ? activeStyles : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          style={(obj) => (obj.isActive ? activeStyles : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={(obj) => (obj.isActive ? activeStyles : null)}
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
