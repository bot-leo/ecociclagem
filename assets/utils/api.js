import axios from "axios";

const api = axios.create({
  baseUrl: 'https://ecociclagem-api.herokuapp.com'
});

export default api;