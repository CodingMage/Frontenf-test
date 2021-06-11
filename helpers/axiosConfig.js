// First we need to import axios.js
import axios from "axios";

// Next we make an 'instance' of it
const instance = axios.create({
  baseURL: "https://xchangeapp-api.herokuapp.com/api",
  // timeout: 1000,
  // headers: { authorization: `Bearer ${token}` },
});

export default instance;
