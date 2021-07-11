import {
  USERS_GET_ALL,
  USERS_SET_ERROR,
  USERS_SET_LOADING,
} from "../types/users_types";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: { message: null, error: null },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_GET_ALL:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: { message: null, error: null },
      };
    case USERS_SET_LOADING:
      return { ...state, loading: action.payload };
    case USERS_SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
