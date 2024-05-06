// Dummy service for Channel entity
export const fetchChannelDetails = () => {
  return Promise.resolve({ id: 1, name: "General", description: "Main communication channel" });
};