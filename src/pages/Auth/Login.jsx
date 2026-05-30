import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");

  const {
    loginUser,
    googleLogin,
  } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const from =
    location?.state || "/dashboard";

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async e => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const email = form.email.value;

    const password =
      form.password.value;

    try {
      await loginUser(
        email,
        password
      );

      toast.success(
        "Login Successful"
      );

      navigate(from);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    async () => {
      try {
        await googleLogin();

        toast.success(
          "Login Successful"
        );

        navigate(from);
      } catch (err) {
        toast.error(err.message);
      }
    };

  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
        "
      >
        <h1
          className="
            text-center
            text-4xl
            font-black
            text-white
          "
        >
          Welcome Back
        </h1>

        <p
          className="
            mt-3
            text-center
            text-gray-400
          "
        >
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-5"
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/10
              p-4
              text-white
              outline-none
            "
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/10
              p-4
              text-white
              outline-none
            "
          />

          <button
            disabled={loading}
            className="
              w-full
              rounded-2xl
              bg-cyan-500
              py-4
              font-semibold
              text-white
            "
          >
            {loading
              ? "Logging..."
              : "Login"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="
            mt-5
            w-full
            rounded-2xl
            border
            border-white/10
            py-4
            text-white
          "
        >
          Continue With Google
        </button>

        <p
          className="
            mt-6
            text-center
            text-gray-400
          "
        >
          New here?

          <Link
            to="/register"
            className="
              ml-2
              text-cyan-400
            "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;