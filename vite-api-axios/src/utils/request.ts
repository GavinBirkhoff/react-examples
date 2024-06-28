import axios from "axios";

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: "http://localhost:8081", // 设置基础URL
  timeout: 10000, // 设置请求超时
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 比如在请求头中添加 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error, "请求出错");
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    console.log(error, "响应出错");
    if (axios.isAxiosError(error)) {
      // 对响应错误做点什么
      if (error.response) {
        // 服务器响应错误
        console.error(
          "HTTP Error:",
          error.response.status,
          error.response.statusText
        );
      } else if (error.request) {
        // 请求未发出或无响应, 比如跨域等
        console.error("Network Error:", error.message);
      } else {
        // 配置错误等
        console.error("Error:", error.message);
      }
    } else {
      // 非 Axios 错误
      console.error("非 Axios Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
