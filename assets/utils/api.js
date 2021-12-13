import axios from "axios"

const api = axios.create({
  baseURL: 'https://ecociclagem-api.herokuapp.com'
})

export default api;