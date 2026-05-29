import { Link } from "react-router-dom";

import Container from "../shared/Container";

import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#030712]/80">
      <Container>
        <div className="h-20 flex items-center justify-between">
          
          <Link
            to="/"
            className="text-2xl font-black"
          >
            <span className="gradient-text">
              GarmentsX
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <Link to="/">Home</Link>

            <Link to="/products">
              Products
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <SecondaryButton text="Login" />
            </Link>

            <Link to="/register">
              <PrimaryButton text="Get Started" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;