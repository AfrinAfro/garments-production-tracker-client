import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {
  const { user, logoutUser } =
    useAuth();

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <img
          src={user?.photoURL}
          alt="user"
          className="h-12 w-12 rounded-full border-2 border-cyan-500 object-cover cursor-pointer"
        />
      </label>

      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 w-60 rounded-2xl bg-[#0f172a] p-4 shadow"
      >
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <button onClick={logoutUser}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;