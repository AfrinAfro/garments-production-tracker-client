import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user, logoutUser } = useAuth();

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-10
      "
    >
      <img
        src={user?.photoURL}
        alt="user"
        className="h-28 w-28 rounded-full"
      />

      <h2 className="mt-6 text-3xl font-bold text-white">
        {user?.displayName}
      </h2>

      <p className="mt-2 text-gray-400">
        {user?.email}
      </p>

      <button
        onClick={logoutUser}
        className="
          mt-8
          rounded-2xl
          bg-red-500
          px-8
          py-4
          text-white
        "
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;