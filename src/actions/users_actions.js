import {
  USERS_GET_ALL,
  USERS_SET_ERROR,
  USERS_SET_LOADING,
} from "../types/users_types";

export const getUsers = (payload) => {
  return {
    type: USERS_GET_ALL,
    payload,
  };
};

export const setLoading = (payload) => ({
  type: USERS_SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: USERS_SET_ERROR,
  payload: { message: "Something was wrong :(", error: payload },
});
