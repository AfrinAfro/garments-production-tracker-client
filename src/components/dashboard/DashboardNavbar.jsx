import { FiBell } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const DashboardNavbar = () => {
  const { user } = useAuth();

  return (
    <div
      className="
        sticky
        top-0
        z-40
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-6
        py-4
      "
    >
      {/* Title */}
      <div>
        <h2
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Dashboard
        </h2>

        <p className="text-sm text-gray-400">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button
          className="
            relative
            rounded-full
            bg-white/10
            p-3
            text-white
            hover:bg-white/20
            transition
          "
        >
          <FiBell className="text-xl" />

          <span
            className="
              absolute
              right-2
              top-2
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <img
            src={user?.photoURL}
            alt="user"
            className="
              h-12
              w-12
              rounded-full
              border-2
              border-cyan-500
              object-cover
            "
          />

          <div className="hidden md:block">
            <h3 className="font-semibold text-white">
              {user?.displayName}
            </h3>

            <p className="text-sm text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;