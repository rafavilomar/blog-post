import axios from "axios";

export const getAllUsers_API = async () => {
  let response = { data: null, err: null };
  try {
    response.data = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
    return response;
  } catch (err) {
    response.err = err.message;
    console.error("ERROR: " + err.message);
    return response;
  }
};

export const getUsersById_API = async (id) => {
  let response = { data: null, err: null };
  try {
    response.data = await axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((response) => response.data);
    return response;
  } catch (err) {
    response.err = err.message;
    console.error("ERROR: " + err.message);
    return response;
  }
};

export const getALLPost_API = async () => {
  let response = { data: null, err: null };
  try {
    response.data = await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.data);
    return response;
  } catch (err) {
    response.err = err.message;
    console.error("ERROR: " + err.message);
    return response;
  }
};

export const getPost_API = async (id) => {
  let response = { data: null, err: null };
  try {
    response.data = await axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.data);
    return response;
  } catch (err) {
    response.err = err.message;
    console.error("ERROR: " + err.message);
    return response;
  }
};
