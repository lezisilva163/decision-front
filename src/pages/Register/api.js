import { api } from "../../utils/api";

export const submitRegistration = async (values) => {
  await api.post("/users", values);
};
