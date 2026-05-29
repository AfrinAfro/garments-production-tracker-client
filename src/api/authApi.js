import axiosPublic from "./axiosPublic";

/**
 * Save user into database
 */
export const saveUser = async userData => {
  const res = await axiosPublic.post(
    "/users",
    userData
  );

  return res.data;
};

/**
 * Get current user role + status
 */
export const getUserRole = async email => {
  const res = await axiosPublic.get(
    `/users/role/${email}`
  );

  return res.data;
};

/**
 * Generate JWT cookie
 */
export const generateJWT = async email => {
  const res = await axiosPublic.post(
    "/jwt",
    { email },
    {
      withCredentials: true,
    }
  );

  return res.data;
};

/**
 * Logout and clear cookie
 */
export const logoutUserApi = async () => {
  const res = await axiosPublic.post(
    "/logout",
    {},
    {
      withCredentials: true,
    }
  );

  return res.data;
};

/**
 * Update user role/status
 */
export const updateUserRole = async (
  id,
  updatedData
) => {
  const res = await axiosPublic.patch(
    `/users/${id}`,
    updatedData
  );

  return res.data;
};

/**
 * Get all users
 */
export const getAllUsers = async () => {
  const res = await axiosPublic.get(
    "/users"
  );

  return res.data;
};

/**
 * Get single user
 */
export const getSingleUser = async email => {
  const res = await axiosPublic.get(
    `/users/${email}`
  );

  return res.data;
};