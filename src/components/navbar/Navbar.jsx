import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#071028]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-black text-white"
        >
          Garments
          <span className="text-cyan-400">
            Pro
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-white lg:flex">
          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {user ? (
            <UserDropdown />
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-2xl bg-white/10 px-5 py-2 text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-2xl bg-cyan-500 px-5 py-2 font-semibold text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;