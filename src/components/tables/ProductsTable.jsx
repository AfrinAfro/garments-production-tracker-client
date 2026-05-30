import {
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import DataTable from "./DataTable";

const ProductsTable = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <DataTable
      columns={[
        "Image",
        "Name",
        "Category",
        "Price",
        "Quantity",
        "Actions",
      ]}
    >
      {products?.map(product => (
        <tr
          key={product._id}
          className="border-b border-white/5"
        >
          <td className="px-6 py-4">
            <img
              src={product.image}
              alt={product.name}
              className="
                h-16
                w-16
                rounded-2xl
                object-cover
              "
            />
          </td>

          <td className="px-6 py-4 text-white">
            {product.name}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {product.category}
          </td>

          <td className="px-6 py-4 text-cyan-400 font-bold">
            ${product.price}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {product.quantity}
          </td>

          <td className="px-6 py-4">
            <div className="flex gap-3">
              <button
                onClick={() =>
                  onEdit(product)
                }
                className="
                  rounded-xl
                  bg-cyan-500
                  p-3
                  text-white
                "
              >
                <FiEdit />
              </button>

              <button
                onClick={() =>
                  onDelete(product)
                }
                className="
                  rounded-xl
                  bg-red-500
                  p-3
                  text-white
                "
              >
                <FiTrash2 />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default ProductsTable;