import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const {
    _id,
    image,
    productName,
    category,
    price,
    availableQuantity,
    minimumOrderQuantity,
  } = product;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        hover:shadow-cyan-500/20
        transition-all
        duration-300
        flex
        flex-col
        h-full
      "
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={productName}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        {/* Category */}
        <span
          className="
            inline-block
            w-fit
            rounded-full
            bg-cyan-500/10
            px-3
            py-1
            text-xs
            font-semibold
            text-cyan-400
            border
            border-cyan-400/20
          "
        >
          {category}
        </span>

        {/* Title */}
        <h2
          className="
            mt-4
            text-xl
            font-bold
            text-white
            line-clamp-1
          "
        >
          {productName}
        </h2>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Starting Price
            </p>

            <h3 className="text-2xl font-bold text-cyan-400">
              ৳ {price}
            </h3>
          </div>

          <div
            className="
              rounded-2xl
              bg-white/5
              px-4
              py-2
              text-center
              border
              border-white/10
            "
          >
            <p className="text-xs text-gray-400">
              MOQ
            </p>

            <p className="text-sm font-semibold text-white">
              {minimumOrderQuantity}
            </p>
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            Available Quantity
          </p>

          <p className="text-base font-semibold text-white">
            {availableQuantity} pcs
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Button */}
        <Link
          to={`/product/${_id}`}
          className="mt-6"
        >
          <button
            className="
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-5
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
              flex
              items-center
              justify-center
              gap-2
            "
          >
            View Details

            <FiArrowRight className="text-lg" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;