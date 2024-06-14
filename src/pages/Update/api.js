import { api } from "../../utils/api";

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, values) => {
  await api.put(`/users/${id}`, values);
};
