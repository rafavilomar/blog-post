import { GET_USERS, SET_ERROR, SET_LOADING } from "../types/users_types";

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload: {message: 'Something was wrong :(', error: payload}
});
