import axios from 'axios'

const insertToken = () => {
    axios.interceptors.request.use(function (config) {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
}

export default insertToken

