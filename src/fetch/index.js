import axios from "axios";

const getData = async () => {
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

export default getData;
