import axios from 'axios'

const baseAxios = axios.create({
    // baseURL: `https://trivia-backend-app.onrender.com`,
    baseURL: 'http://localhost:3002',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export default baseAxios