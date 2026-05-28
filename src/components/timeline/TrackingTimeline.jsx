import { motion } from "framer-motion";

const TrackingTimeline = ({ history = [] }) => {
  const steps = [
    "pending",
    "approved",
    "in-production",
    "quality-check",
    "completed",
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Order Tracking</h2>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const record = history.find((h) => h.status === step);

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              {/* Circle */}
              <div
                className={`w-4 h-4 rounded-full mt-1 ${
                  record ? "bg-green-500" : "bg-gray-300"
                }`}
              />

              {/* Content */}
              <div>
                <h3 className="font-semibold capitalize">{step}</h3>

                {record ? (
                  <p className="text-sm text-gray-500">
                    {record.note} •{" "}
                    {new Date(record.updatedAt).toLocaleString()}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400">Waiting...</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackingTimeline;