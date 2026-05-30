import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-[#071028]
        px-6
        text-center
      "
    >
      <h1 className="text-8xl font-black text-cyan-500">
        404
      </h1>

      <h2 className="mt-6 text-4xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-gray-400">
        The page you are trying to access
        does not exist.
      </p>

      <Link
        to="/"
        className="
          mt-8
          rounded-2xl
          bg-cyan-500
          px-8
          py-4
          font-semibold
          text-white
        "
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Error404;