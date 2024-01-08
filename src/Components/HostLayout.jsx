import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";
const HostLayout = () => {
  const activeStyles = {
    color: "#ffae66",
    textDecoration: "underline",
    fontWeight: "bold",
  };
  return (
    <>
      <nav className="host__nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="vans"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
