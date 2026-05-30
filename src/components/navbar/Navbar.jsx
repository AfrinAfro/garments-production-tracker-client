import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b border-white/10
        bg-[#030712]/80
        backdrop-blur-2xl
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="navbar h-20 p-0 flex items-center justify-between w-full">
          
          
          <div className="navbar-start flex-1 lg:flex-none">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight inline-flex items-center"
            >
              <span className="text-white">Garments</span>
              <span className="text-cyan-400">Pro</span>
            </Link>
          </div>

         
          <div className="navbar-center hidden lg:flex">
            <nav className="flex items-center gap-10">
              <NavLinks />
            </nav>
          </div>

        
          <div className="navbar-end flex-1 lg:flex-none justify-end gap-4 items-center">
            
            <div className="flex items-center">
              <ThemeToggle />
            </div>

          
            <div className="hidden lg:flex items-center">
              <UserDropdown />
            </div>

            
            <div className="dropdown dropdown-end lg:hidden flex items-center">
              <label
                tabIndex={0}
                role="button"
                className="
                  btn btn-ghost
                  p-2.5
                  min-h-0
                  h-auto
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  rounded-xl
                  text-white
                "
              >
                <Menu size={20} />
              </label>

              <ul
                tabIndex={0}
                className="
                  mt-4
                  z-[100]
                  p-5
                  shadow-2xl
                  dropdown-content
                  rounded-2xl
                  w-64
                  bg-[#0B1120]
                  border border-white/10
                  backdrop-blur-2xl
                  flex
                  flex-col
                  gap-4
                "
              >
                <nav className="flex flex-col gap-3">
                  <NavLinks />
                </nav>

                <div className="pt-4 border-t border-white/10 block">
                  <UserDropdown />
                </div>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;