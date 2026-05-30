import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } =
    useForm();

  const { data: product = {} } = useQuery({
    queryKey: ["update-product", id],
    queryFn: async () => {
      const { data } =
        await axiosSecure.get(
          `/products/${id}`
        );

      return data;
    },
  });

  const onSubmit = async data => {
    await axiosSecure.patch(
      `/products/${id}`,
      data
    );

    toast.success("Product Updated");

    navigate("/dashboard/manage-products");
  };

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
      <h1 className="mb-10 text-4xl font-black text-white">
        Update Product
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <input
          {...register("name")}
          defaultValue={product.name}
          className="w-full rounded-2xl bg-white/10 p-4 text-white"
        />

        <input
          {...register("price")}
          defaultValue={product.price}
          className="w-full rounded-2xl bg-white/10 p-4 text-white"
        />

        <button
          className="
            rounded-2xl
            bg-cyan-500
            px-8
            py-4
            text-white
          "
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;