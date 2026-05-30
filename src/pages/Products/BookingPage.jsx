import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTitle from "../../hooks/useTitle";

const BookingPage = () => {
  useTitle("Booking");

  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, watch } =
    useForm();

  const quantity = watch("quantity");

  const { data: product = {} } = useQuery({
    queryKey: ["booking-product", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/products/${id}`
      );

      return data;
    },
  });

  const totalPrice =
    quantity && product.price
      ? quantity * product.price
      : 0;

  const onSubmit = async formData => {
    const bookingInfo = {
      ...formData,
      productId: product._id,
      productName: product.name,
      userEmail: user?.email,
      totalPrice,
      status: "Pending",
    };

    try {
      await axiosSecure.post(
        "/orders",
        bookingInfo
      );

      toast.success("Order placed");

      navigate("/dashboard/my-orders");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#071028] px-6 py-12">
      <div
        className="
          mx-auto
          max-w-4xl
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
        "
      >
        <h1 className="text-4xl font-black text-white">
          Place Order
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-6"
        >
          <input
            defaultValue={user?.email}
            readOnly
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <input
            defaultValue={product.name}
            readOnly
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <input
            {...register("firstName")}
            placeholder="First Name"
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <input
            type="number"
            {...register("quantity")}
            placeholder="Quantity"
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <input
            value={totalPrice}
            readOnly
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <textarea
            {...register("address")}
            rows={5}
            placeholder="Delivery Address"
            className="w-full rounded-2xl bg-white/10 p-4 text-white"
          />

          <button
            className="
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-white
            "
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;