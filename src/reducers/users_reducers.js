const INITIAL_STATE = {
  users: [1,2,3],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
