import axiosInstance from "../utils/request";

// 模拟 404 Not Found 错误
export const getNotFound = async () => {
  try {
    const response = await axiosInstance.get("/api/not-found");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟 500 Internal Server Error
export const getInternalServerError = async () => {
  try {
    const response = await axiosInstance.get("/api/internal-server-error");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟网络错误
export const getNetworkError = async () => {
  try {
    const response = await axiosInstance.get("http://localhost:9999");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟超时错误
export const getTimeoutError = async () => {
  try {
    const response = await axiosInstance.get("/api/timeout", {
      timeout: 2000,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟 401 Unauthorized 错误
export const getUnauthorized = async () => {
  try {
    const response = await axiosInstance.get("/api/unauthorized");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟 403 Forbidden 错误
export const getForbidden = async () => {
  try {
    const response = await axiosInstance.get("/api/forbidden");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟 400 Bad Request 错误
export const getBadRequest = async () => {
  try {
    const response = await axiosInstance.get("/api/bad-request");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 模拟 429 Too Many Requests 错误
export const getTooManyRequests = async () => {
  try {
    const response = await axiosInstance.get("/api/too-many-requests");
    return response.data;
  } catch (error) {
    throw error;
  }
};
