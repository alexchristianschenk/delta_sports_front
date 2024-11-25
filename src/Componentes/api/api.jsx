import axios from "axios";
const api = axios.create({
    baseURL: 'https://delta-sports-back.onrender.com/api'
})

export default api;