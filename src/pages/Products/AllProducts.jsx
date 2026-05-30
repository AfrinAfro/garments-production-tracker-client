import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import ProductCard from "../../components/cards/ProductCard";
import SearchBar from "../../components/forms/SearchBar";
import Spinner from "../../components/loaders/Spinner";
import PageBanner from "../../components/shared/PageBanner";

// CHANGED: Use axiosPublic so it doesn't block loading while authentication/JWT is being set up
import axiosPublic from "../../api/axiosPublic";
import useTitle from "../../hooks/useTitle";

const AllProducts = () => {
  useTitle("All Products");

  const [search, setSearch] = useState("");

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["all-products", search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/products?search=${search}`
      );
      
      // FIXED: If your backend returns an object like { success: true, data: [...] },
      // we make sure to target the actual data array safely.
      return Array.isArray(data) ? data : (data.data || []);
    },
  });

  if (isLoading) return <Spinner />;

  // Error handling visualization for easier debugging
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#071028] text-red-400">
        <p>Error loading products: {error.message}. Check if your backend server is running on port 5000.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071028] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <PageBanner
          title="All Products"
          subtitle="Browse garments production products"
        />

        <div className="mt-10">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {products.length === 0 ? (
          <div className="mt-16 text-center text-gray-400">
            <p className="text-xl font-medium">No products found.</p>
            <p className="mt-2 text-sm text-gray-500">Your backend collection might be empty or your search query yielded no results.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products?.map(product => (
              <ProductCard
                key={product._id || product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;