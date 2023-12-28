import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        const tokenName = localStorage.getItem('tokenName')
        const token = localStorage.getItem('token')
        config.headers[tokenName] = token
        config.headers['X-Tt-LogId'] = uuidv4();
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data

        return res

    },
    error => {
        // console.log('err' + error)
        return Promise.reject(error);
    }
)

export default service
