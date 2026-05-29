const FormTextarea = ({
  label,
  placeholder,
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

      <textarea
        rows={5}
        placeholder={placeholder}
        {...register(name, {
          required,
        })}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
          backdrop-blur-xl
          transition
          focus:border-cyan-500
        "
      />

      {errors[name] && (
        <p className="text-sm text-red-400">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;