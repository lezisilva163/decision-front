import { api } from "../../utils/api";

export const fetchUsers = async () => {
  const response = await api.get("/users/list");
  return response.data;
};

export const removeUser = async (id) => {
  await api.delete(`/users/${id}`);
};
