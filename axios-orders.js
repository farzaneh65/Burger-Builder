import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-1e7b6.firebaseio.com/",
});

export default instance;
