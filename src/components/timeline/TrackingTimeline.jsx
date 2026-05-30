import TimelineStep from "./TimelineStep";

const TrackingTimeline = ({
  trackingData = [],
}) => {
  return (
    <div className="space-y-8">
      {trackingData.map(
        (step, index) => (
          <TimelineStep
            key={index}
            step={step}
            isLast={
              index ===
              trackingData.length - 1
            }
          />
        )
      )}
    </div>
  );
};

export default TrackingTimeline;