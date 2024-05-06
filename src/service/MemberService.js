// Dummy service for Member entity
export const fetchMemberDetails = () => {
  return Promise.resolve({ id: 1, name: "John Doe", role: "Developer" });
};