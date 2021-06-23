import {
  POSTS_GET_ALL,
  POSTS_SET_ERROR,
  POSTS_SET_LOADING,
} from "../types/posts_types";

export const getPosts = (payload) => ({
  type: POSTS_GET_ALL,
  payload,
});

export const setLoadingPosts = (payload) => ({
  type: POSTS_SET_LOADING,
  payload,
});

export const setErrorPosts = (payload) => ({
  type: POSTS_SET_ERROR,
  payload: { message: "Something was wrong :(", error: payload },
});
