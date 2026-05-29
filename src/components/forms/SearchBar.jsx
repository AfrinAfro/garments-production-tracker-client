import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  search,
  setSearch,
  placeholder = "Search...",
}) => {
  return (
    <div className="relative w-full">
      <FiSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        value={search}
        onChange={e =>
          setSearch(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          py-3
          pl-12
          pr-4
          text-white
          outline-none
          backdrop-blur-xl
          focus:border-cyan-500
        "
      />
    </div>
  );
};

export default SearchBar;