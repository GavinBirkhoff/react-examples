import {
  getNotFound,
  getInternalServerError,
  getNetworkError,
  getTimeoutError,
  getUnauthorized,
  getForbidden,
  getBadRequest,
  getTooManyRequests,
} from "./api/error";

const TestErrors = () => {
  const handleApiCall = async (
    apiCall: () => Promise<unknown>,
    errorMessage: string
  ) => {
    try {
      await apiCall();
    } catch (error) {
      console.error(`UI ${errorMessage}:`, error);
    }
  };

  return (
    <div>
      <h1>Testing API Errors</h1>
      <button onClick={() => handleApiCall(getNotFound, "404 Error")}>
        Simulate 404 Not Found
      </button>
      <button
        onClick={() => handleApiCall(getInternalServerError, "500 Error")}
      >
        Simulate 500 Internal Server Error
      </button>
      <button onClick={() => handleApiCall(getNetworkError, "Network Error")}>
        Simulate Network Error
      </button>
      <button onClick={() => handleApiCall(getTimeoutError, "Timeout Error")}>
        Simulate Timeout Error
      </button>
      <button onClick={() => handleApiCall(getUnauthorized, "401 Error")}>
        Simulate 401 Unauthorized
      </button>
      <button onClick={() => handleApiCall(getForbidden, "403 Error")}>
        Simulate 403 Forbidden
      </button>
      <button onClick={() => handleApiCall(getBadRequest, "400 Error")}>
        Simulate 400 Bad Request
      </button>
      <button onClick={() => handleApiCall(getTooManyRequests, "429 Error")}>
        Simulate 429 Too Many Requests
      </button>
    </div>
  );
};

export default TestErrors;
