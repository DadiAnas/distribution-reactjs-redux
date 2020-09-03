import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3009/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
