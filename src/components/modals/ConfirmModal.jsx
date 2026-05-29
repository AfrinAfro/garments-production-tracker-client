import DangerButton from "../buttons/DangerButton";

const ConfirmModal = ({
  isOpen,
  closeModal,
  title,
  message,
  confirmAction,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-[#0f172a]
          p-6
        "
      >
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 text-gray-400">
          {message}
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={closeModal}
            className="
              flex-1
              rounded-2xl
              bg-white/10
              py-3
              text-white
            "
          >
            Cancel
          </button>

          <DangerButton
            onClick={confirmAction}
            fullWidth
          >
            Confirm
          </DangerButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;