import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-crud-app-sj2y.onrender.com/api/tasks"
});

export default API;