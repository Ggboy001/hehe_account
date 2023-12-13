import axios from 'axios'
const service = axios.create({

    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        // config.headers['Authorization'] = window.localStorage.getItem('Authorization')
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response

    },
    error => {
        console.log('err' + error)

    }
)

export default service
