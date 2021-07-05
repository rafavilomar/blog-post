import {
  COMMENTS_GET_ALL,
  COMMENTS_SET_ERROR,
  COMMENTS_SET_LOADING
} from "../types/comments_types";

const INITIAL_STATE = {
  comments: [],
  loading: false,
  error: { message: null, error: null },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENTS_GET_ALL:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: { message: null, error: null },
      };
    case COMMENTS_SET_LOADING:
      return { ...state, loading: action.payload };
    case COMMENTS_SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
