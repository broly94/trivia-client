import axios from 'axios'

const baseAxios = axios.create({
    // baseURL: `${import.meta.env.BASE_URL}`,
    baseURL: 'http://localhost:3002',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export default baseAxios