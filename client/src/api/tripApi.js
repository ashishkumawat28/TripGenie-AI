import axios from "axios";

const tripAPI = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default tripAPI;