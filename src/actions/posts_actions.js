import { POSTS_GET_ALL } from "../types/posts_types";

export const getPosts = (payload) => ({
  type: POSTS_GET_ALL,
  payload,
});