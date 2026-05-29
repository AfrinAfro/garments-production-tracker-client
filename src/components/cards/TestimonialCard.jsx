import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const {
    name,
    image,
    company,
    review,
    rating,
  } = testimonial;

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-xl
        hover:shadow-cyan-500/10
        transition-all
        duration-300
        h-full
        flex
        flex-col
      "
    >
      {/* Quote Icon */}
      <div
        className="
          absolute
          top-5
          right-5
          text-cyan-500/10
          text-6xl
        "
      >
        <FaQuoteLeft />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(rating)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p
        className="
          mt-5
          text-gray-300
          leading-relaxed
          flex-grow
        "
      >
        “{review}”
      </p>

      {/* User */}
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="
            h-14
            w-14
            rounded-full
            object-cover
            border
            border-cyan-500/30
          "
        />

        <div>
          <h3 className="font-bold text-white">
            {name}
          </h3>

          <p className="text-sm text-cyan-400">
            {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;