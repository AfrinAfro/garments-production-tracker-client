const trackingSteps = [
  "Cutting Completed",
  "Sewing Started",
  "Finishing",
  "QC Checked",
  "Packed",
  "Shipped",
  "Out for Delivery",
];

const generateTrackingStatus = () => {
  const randomIndex = Math.floor(
    Math.random() *
      trackingSteps.length
  );

  return trackingSteps[randomIndex];
};

export default generateTrackingStatus;