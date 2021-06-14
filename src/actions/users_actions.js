export const getAll = () => (dispatch) => {
  dispatch({
    type: "GET_USERS",
    payload: [1, 2, 3, 4, 5],
  });
};

export const getUsers = payload => ({
  type: "GET_USERS",
  payload
})
