// Dummy service for Team entity
export const fetchTeamInfo = () => {
  return Promise.resolve({ id: 1, name: "Alpha Team", members: 10 });
};