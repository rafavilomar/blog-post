import {
  POSTS_GET_ALL,
  POSTS_SET_ERROR,
  POSTS_SET_LOADING,
} from "../types/posts_types";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: { message: null, error: null },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_GET_ALL:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: { message: null, error: null },
      };
    case POSTS_SET_LOADING:
      return { ...state, loading: action.payload };
    case POSTS_SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
