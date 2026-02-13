import { Link, NavLink } from "react-router-dom";
import avatarImg from "../assets/avatar-icon.png";

function Header() {
  const isActiveStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  return (
    <header className="py-6 px-4">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <Link className="font-bold text-2xl" to="/">
          #vanlife
        </Link>
        <nav className="flex gap-3.5 font-medium text-lg">
          <NavLink 
            className="hover:underline" 
            to="/host"
            style={({isActive}) => isActive ? isActiveStyle : null }
          >
            Host
          </NavLink>
          <NavLink 
            className="hover:underline" 
            to="/about"
            style={({isActive}) => isActive ? isActiveStyle : null }
          >
            About
          </NavLink>
          <NavLink 
            className="hover:underline" 
            to="/vans"
            style={({isActive}) => isActive ? isActiveStyle : null }
          >
            Vans
          </NavLink>
          <Link to="login" className="">
            <img src={avatarImg} className="" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
