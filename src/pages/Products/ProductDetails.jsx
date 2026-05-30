import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import Spinner from "../../components/loaders/Spinner";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTitle from "../../hooks/useTitle";

const ProductDetails = () => {
  useTitle("Product Details");

  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/products/${id}`
      );

      return data;
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="min-h-screen bg-[#071028] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-[40px]"
          />
        </div>

        <div>
          <h1 className="text-5xl font-black text-white">
            {product.name}
          </h1>

          <p className="mt-6 leading-8 text-gray-300">
            {product.description}
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-xl text-cyan-400">
              Category: {product.category}
            </p>

            <p className="text-xl text-cyan-400">
              Price: ${product.price}
            </p>

            <p className="text-xl text-cyan-400">
              Available Quantity:
              {product.quantity}
            </p>

            <p className="text-xl text-cyan-400">
              Minimum Order:
              {product.minimumOrder}
            </p>
          </div>

          <Link
            to={`/booking/${product._id}`}
            className="
              mt-10
              inline-flex
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-white
            "
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;