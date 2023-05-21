import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3665/api'
})

export default instance