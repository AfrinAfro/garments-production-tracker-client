import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axiosPublic from "../../api/axiosPublic";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const role = form.role.value;
    const password = form.password.value;

    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Need lowercase letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Need uppercase letter");
      return;
    }
    if (password.length < 6) {
      toast.error("Minimum 6 characters");
      return;
    }

    setLoading(true);

    try {
      // 1. Firebase Creation
      await createUser(email, password);

      // 2. Profile Sync
      await updateUserProfile(name, photo);

      // 3. Database Collection Entry
      const userInfo = {
        name,
        email,
        photo,
        role,
        status: "pending",
      };

      // Ensure this routes smoothly to your users controller endpoint
      await axiosPublic.post("/users", userInfo);

      toast.success("Registration Successful");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-center text-4xl font-black text-white">Create Account</h1>

        <form onSubmit={handleRegister} className="mt-10 space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none"
          />

          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none"
          />

          <input
            name="email"
            type="type"
            placeholder="Email"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none"
          />

          <select
            name="role"
            className="w-full rounded-2xl border border-white/10 bg-[#071028] p-4 text-white"
          >
            <option value="buyer">Buyer</option>
            <option value="manager">Manager</option>
          </select>

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none"
          />

          <button
            disabled={loading}
            className="w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have account?
          <Link to="/login" className="ml-2 text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;