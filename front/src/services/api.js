import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fake-api-hack.herokuapp.com'
})

export default api;
