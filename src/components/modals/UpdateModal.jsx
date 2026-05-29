const UpdateModal = ({
  isOpen,
  closeModal,
  children,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0f172a] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <button
            onClick={closeModal}
            className="text-2xl text-white"
          >
            ×
          </button>
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;