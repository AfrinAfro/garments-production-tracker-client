const FormSelect = ({
  label,
  options,
  register,
  name,
  errors,
  required,
}) => {
  return (
    <div className="space-y-2">
      <label
        className="
          text-sm
          font-semibold
          text-gray-300
        "
      >
        {label}
      </label>

      <select
        {...register(name, {
          required,
        })}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#0f172a]
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-cyan-500
        "
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <p className="text-sm text-red-400">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormSelect;