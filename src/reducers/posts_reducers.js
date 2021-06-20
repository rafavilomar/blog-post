import { POSTS_GET_ALL } from "../types/posts_types";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: { message: null, error: null },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_GET_ALL: 
    return { ...state, posts: action.payload, loading: false, error: { message: null, error: null } };
    default:
      return state;
  }
};
