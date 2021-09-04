import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: '/',
    timeout: 20000,
});


service.interceptors.request.use(
    (request) => {
        NProgress.start();
        return request;
    },
    (error) => {
        console.log(error.message)
    }
)


service.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response.data
    },
    (error) => {
        NProgress.done();
        return Promise(() => {})
    }
)

export default service;