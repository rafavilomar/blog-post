import {
  COMMENTS_GET_ALL,
  COMMENTS_SET_ERROR,
  COMMENTS_SET_LOADING
} from "../types/comments_types.jsx";

export const getComments = (payload) => ({
  type: COMMENTS_GET_ALL,
  payload,
});

export const setLoadingComments = (payload) => ({
  type: COMMENTS_SET_LOADING,
  payload,
});

export const setErrorComments = (payload) => ({
  type: COMMENTS_SET_ERROR,
  payload: { message: "Something was wrong :(", error: payload },
});
