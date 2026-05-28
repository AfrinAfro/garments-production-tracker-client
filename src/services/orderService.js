import axiosSecure from "../api/axiosSecure";

// CREATE ORDER
export const createOrder = async (data) => {
  const res = await axiosSecure.post("/api/orders", data);
  return res.data;
};

// GET ALL ORDERS
export const getAllOrders = async () => {
  const res = await axiosSecure.get("/api/orders");
  return res.data;
};

// GET USER ORDERS
export const getUserOrders = async (email) => {
  const res = await axiosSecure.get(`/api/orders/user/${email}`);
  return res.data;
};

// UPDATE ORDER STATUS
export const updateOrderStatus = async (id, data) => {
  const res = await axiosSecure.put(`/api/orders/${id}`, data);
  return res.data;
};