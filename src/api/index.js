import request from "@/utils/ajax";

export const Login = () => {
    return request({
        url: '/api/auth/login',
        method: 'post',
        data: {
            email: 'test@a.com',
            password: '123123'
        }
    })
}


export const artistList = () => {
    return request({
        url: '/artist/list',
        method: 'get',
        data: {
            type: 7,
            area: 96,
            initial: 'b'
        }
    })
}