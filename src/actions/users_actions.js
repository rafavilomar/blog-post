import { GET_USERS } from "../types/users_types";

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload,
});
