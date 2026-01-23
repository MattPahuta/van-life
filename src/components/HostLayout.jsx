import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const isActiveStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="mx-auto max-w-2xl flex gap-4 space-y-6">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? isActiveStyle : null)}>
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? isActiveStyle : null)}>
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? isActiveStyle : null)}>
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? isActiveStyle : null)}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
