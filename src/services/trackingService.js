import axiosSecure from "../api/axiosSecure";

export const getTrackingByOrder = async id => {
  const { data } = await axiosSecure.get(
    `/tracking/${id}`
  );

  return data;
};

export const addTrackingUpdate = async trackingData => {
  const { data } = await axiosSecure.post(
    "/tracking",
    trackingData
  );

  return data;
};

export const updateTrackingStatus = async (
  id,
  status
) => {
  const { data } = await axiosSecure.patch(
    `/tracking/${id}`,
    {
      status,
    }
  );

  return data;
};

export const deleteTracking = async id => {
  const { data } = await axiosSecure.delete(
    `/tracking/${id}`
  );

  return data;
};