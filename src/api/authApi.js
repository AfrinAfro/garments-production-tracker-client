import axiosPublic from "./axiosPublic";


export const saveUser = async userData => {
  const res = await axiosPublic.post(
    "/users",
    userData
  );

  return res.data;
};


export const getUserRole = async email => {
  const res = await axiosPublic.get(
    `/users/role/${email}`
  );

  return res.data;
};


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


export const getAllUsers = async () => {
  const res = await axiosPublic.get(
    "/users"
  );

  return res.data;
};


export const getSingleUser = async email => {
  const res = await axiosPublic.get(
    `/users/${email}`
  );

  return res.data;
};