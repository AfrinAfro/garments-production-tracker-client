import { useState } from "react";
import DangerButton from "../buttons/DangerButton";

const SuspendModal = ({
  isOpen,
  closeModal,
  onSuspend,
}) => {
  const [reason, setReason] =
    useState("");

  const [feedback, setFeedback] =
    useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSuspend({
      reason,
      feedback,
    });

    closeModal();
  };

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
          max-w-lg
          rounded-3xl
          bg-[#0f172a]
          p-6
          border
          border-white/10
        "
      >
        <h2 className="text-2xl font-bold text-white">
          Suspend User
        </h2>

        <div className="mt-6 space-y-4">
          <textarea
            placeholder="Suspend reason"
            value={reason}
            onChange={e =>
              setReason(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              bg-white/5
              p-4
              text-white
              outline-none
            "
          />

          <textarea
            placeholder="Feedback"
            value={feedback}
            onChange={e =>
              setFeedback(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              bg-white/5
              p-4
              text-white
              outline-none
            "
          />
        </div>

        <div className="mt-6 flex gap-4">
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
            onClick={handleSubmit}
            fullWidth
          >
            Suspend
          </DangerButton>
        </div>
      </div>
    </div>
  );
};

export default SuspendModal;