import { useState } from "react";
import toast from "react-hot-toast";
import { createProduct } from "../../../services/productService";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const product = {
      name: form.name.value,
      description: form.description.value,
      price: Number(form.price.value),
      quantity: Number(form.quantity.value),
      image: form.image.value,
    };

    try {
      await createProduct(product);
      toast.success("Product added successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input name="name" placeholder="Product Name" className="w-full border p-2" />

        <textarea name="description" placeholder="Description" className="w-full border p-2" />

        <input name="price" type="number" placeholder="Price" className="w-full border p-2" />

        <input name="quantity" type="number" placeholder="Quantity" className="w-full border p-2" />

        <input name="image" placeholder="Image URL" className="w-full border p-2" />

        <button className="w-full bg-indigo-600 text-white p-2 rounded">
          {loading ? "Adding..." : "Add Product"}
        </button>

      </form>
    </div>
  );
};

export default AddProduct;