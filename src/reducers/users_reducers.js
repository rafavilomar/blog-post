import { GET_USERS, SET_LOADING, SET_ERROR } from "../types/users_types";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: action.payload };
      case SET_ERROR:
        return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
