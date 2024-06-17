import axios from 'axios'
// import Qs from 'qs'
// let qs = Qs

// 创建axios实例对象
let instance = axios.create({
    baseURL: "http://192.168.0.100",
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    // console.log(config,'请求配置项');
    let token = localStorage.getItem('token')
    token && (config.headers.Authoriztion = token)
    return config
}, error => {
    alert('请求失败')
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
    let res = response.data
    return res
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400: error.message = '请求错误(400)';
                break;
            case 401: error.message = '未授权，请重新登录(401)';
                break;
            case 403: error.message = '拒绝访问(403)';
                break;
            case 404: error.message = '请求出错(404)';
                break;
            case 408: error.message = '请求超时(408)';
                break;
            case 500: error.message = '服务器错误(500)';
                break;
            case 501: error.message = '服务未实现(501)';
                break;
            case 502: error.message = '网络错误(502)';
                break;
            case 503: error.message = '服务不可用(503)';
                break;
            case 504: error.message = '网络超时(504)';
                break;
            case 505: error.message = 'HTTP版本不受支持(505)';
                break;
            default: error.message = `连接出错${error.response.status}!`;
        }
    } else {
        //服务器没有返回结果 分两种情况 断网  服务器崩了
        if (!window.navigator.onLine) {
            //断网处理：跳转到断网页面
            return
        }
    }
    return Promise.reject(error)
})

// 导出axios实例
export default instance