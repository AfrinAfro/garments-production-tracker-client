const UserDropdown = () => {
  return (
    <div className="flex items-center gap-3">
      <button
        className="
          px-5 py-2.5
          rounded-xl
          text-sm
          font-medium
          border border-white/10
          text-gray-300
          hover:bg-white/5
          transition-all duration-300
        "
      >
        Login
      </button>

      <button
        className="
          px-5 py-2.5
          rounded-xl
          text-sm
          font-semibold
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          hover:scale-105
          transition-all duration-300
          shadow-lg shadow-cyan-500/20
        "
      >
        Register
      </button>
    </div>
  );
};

export default UserDropdown;