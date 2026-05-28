import axiosSecure from "../api/axiosSecure";

// GET ALL PRODUCTS
export const getProducts = async () => {
  const res = await axiosSecure.get("/api/products");
  return res.data;
};

// CREATE PRODUCT
export const createProduct = async (data) => {
  const res = await axiosSecure.post("/api/products", data);
  return res.data;
};

// UPDATE PRODUCT
export const updateProduct = async (id, data) => {
  const res = await axiosSecure.put(`/api/products/${id}`, data);
  return res.data;
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  const res = await axiosSecure.delete(`/api/products/${id}`);
  return res.data;
};