import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    // examples
    "api-key": "abcdef",
    "Content-Type": "application/json",
  },
});

export { CanceledError };
