import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
});
