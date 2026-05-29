import { useState } from "react";

const statuses = [
  "Cutting Completed",
  "Sewing Started",
  "Finishing",
  "QC Checked",
  "Packed",
  "Shipped",
  "Out for Delivery",
];

const TrackingModal = ({
  isOpen,
  closeModal,
  onSave,
}) => {
  const [status, setStatus] =
    useState(statuses[0]);

  const [location, setLocation] =
    useState("");

  const [note, setNote] =
    useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSave({
      status,
      location,
      note,
      createdAt: new Date(),
    });

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-[#0f172a] p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-white">
          Add Tracking Update
        </h2>

        <div className="mt-6 space-y-4">
          <select
            value={status}
            onChange={e =>
              setStatus(e.target.value)
            }
            className="w-full rounded-2xl bg-white/5 p-4 text-white"
          >
            {statuses.map(item => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={e =>
              setLocation(e.target.value)
            }
            className="w-full rounded-2xl bg-white/5 p-4 text-white"
          />

          <textarea
            placeholder="Notes"
            value={note}
            onChange={e =>
              setNote(e.target.value)
            }
            className="w-full rounded-2xl bg-white/5 p-4 text-white"
          />
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={closeModal}
            className="flex-1 rounded-2xl bg-white/10 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 rounded-2xl bg-cyan-500 py-3 font-semibold text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;