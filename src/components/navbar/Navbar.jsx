import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link to="/" className="text-xl font-bold text-indigo-600">
          ThreadLine
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/all-products" className="hover:text-indigo-600">Products</Link>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;