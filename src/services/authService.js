import axiosPublic from "../api/axiosPublic";

// REGISTER USER
export const registerUser = async (userData) => {
  const res = await axiosPublic.post("/api/auth/register", userData);
  return res.data;
};

// LOGIN USER
export const loginUser = async (userData) => {
  const res = await axiosPublic.post("/api/auth/login", userData);
  return res.data;
};

// LOGOUT USER
export const logoutUser = async () => {
  const res = await axiosPublic.post("/api/auth/logout");
  return res.data;
};