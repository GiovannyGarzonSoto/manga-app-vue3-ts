import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://manga-app-express-mongo-production.up.railway.app/api',
    // baseURL: 'http://localhost:3665/api'
})

export default instance