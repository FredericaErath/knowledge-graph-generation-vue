import axios from 'axios'


// import nprogress from "nprogress";
// // start：进度条开始  done：进度条结束
// // 引入样式
// import "nprogress/nprogress.css"

// 利用axios对象的方法create，区创建一个axios实例
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候：路径中会出现qpi
    // baseURL:"/api",
    // 代表请求超时的时间5s
    timeout:60000,
    headers: {'Content-Type': 'type=video/mp4;charset=utf-8'}
});

// 请求拦截器：再发请求之前，拦截器可以检测到，在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // nprogress.start();
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
});

// 响应拦截器：再发请求之前，拦截器可以检测到，在请求发出去之前做一些事情
requests.interceptors.response.use(
    (res)=>{
        // nprogress.done();
        return res;
    },
    (err)=>{
        return Promise.reject(new Error(err));
    }
);

// 对外暴露
export default requests;