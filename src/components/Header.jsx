import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mx-auto max-w-2xl flex items-center justify-between py-6 px-4">
      <Link className="font-bold text-2xl" to="/">
        #vanlife
      </Link>
      <nav className="flex gap-3.5 font-medium text-lg">
        <Link className="hover:underline" to="/about">
          About
        </Link>
        <Link className="hover:underline" to="/vans">
          Vans
        </Link>
      </nav>
    </header>
  );
}

export default Header;
