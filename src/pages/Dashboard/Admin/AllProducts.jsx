import { useQuery } from "@tanstack/react-query";

import ProductsTable from "../../../components/tables/ProductsTable";
import Spinner from "../../../components/loaders/Spinner";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const AllProducts = () => {
  useTitle("Admin All Products");

  const axiosSecure = useAxiosSecure();

  const { data: products = [], isLoading } =
    useQuery({
      queryKey: ["admin-products"],
      queryFn: async () => {
        const { data } =
          await axiosSecure.get("/products");

        return data;
      },
    });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="mb-10 text-4xl font-black text-white">
        All Products
      </h1>

      <ProductsTable products={products} />
    </div>
  );
};

export default AllProducts;